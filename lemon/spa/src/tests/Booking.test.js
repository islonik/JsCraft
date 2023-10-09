import {act, fireEvent, render, screen} from '@testing-library/react';

import Booking from '../components/Booking';
import { AlertProvider } from "../hooks/alertContext";

test('empty Full name', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter input
    let fullNameInput = dom.container.querySelector("#fullName");
    fireEvent.change(fullNameInput, {
      target: {value: ''}
    });
    expect(fullNameInput.value).toBe("");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    fireEvent.click(submit);

    // check full name warning
    let requiredText = await screen.findByText("Required Full Name");
    expect(requiredText).toBeInTheDocument();
});

test('empty Email address', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter input
    let emailInput = dom.container.querySelector("#email");
    fireEvent.change(emailInput, {
      target: {value: ''}
    });
    expect(emailInput.value).toBe("");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    fireEvent.click(submit);

    // check email error message
    let requiredText = await screen.findByText("Required Email address");
    expect(requiredText).toBeInTheDocument();
});

test('wrong Email address', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter input
    let emailInput = dom.container.querySelector("#email");
    fireEvent.change(emailInput, {
      target: {value: '5'}
    });
    expect(emailInput.value).toBe("5");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    fireEvent.click(submit);

    // check email error message
    let requiredText = await screen.findByText("Invalid email address");
    expect(requiredText).toBeInTheDocument();
});

test('empty phone', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter input
    let phoneInput = dom.container.querySelector("#phone");
    fireEvent.change(phoneInput, {
      target: {value: ''}
    });
    expect(phoneInput.value).toBe("");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    fireEvent.click(submit);

    // check phone error message
    let requiredText = await screen.findByText("Required phone number");
    expect(requiredText).toBeInTheDocument();
});

test('wrong phone', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter input
    let phoneInput = dom.container.querySelector("#phone");
    fireEvent.change(phoneInput, {
      target: {value: '55'}
    });
    expect(phoneInput.value).toBe("55");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    fireEvent.click(submit);

    // check phone error message
    let requiredText = await screen.findByText("Phone number should consist of 11 numbers");
    expect(requiredText).toBeInTheDocument();
});

test('default type value', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter a broken input
    let typeInput = dom.container.querySelector("#type");
    await act(async() => {
        fireEvent.change(typeInput, {
            target: {value: ''}
        });
    })
    // check the default value
    expect(typeInput.value).toBe("business");
});

test('empty guests', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter guests input
    let dateInput = dom.container.querySelector("#guests");
    await act(async() => {
        fireEvent.change(dateInput, {
            target: {value: ''}
        });
    })
    // check guests input
    expect(dateInput.value).toBe("");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    fireEvent.click(submit);

    // check the error message
    let requiredText = await screen.findByText("Required the amount of guests");
    expect(requiredText).toBeInTheDocument();
});

test('0 guests', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter 0 guests
    let dateInput = dom.container.querySelector("#guests");
    await act(async() => {
        fireEvent.change(dateInput, {
            target: {value: '0'}
        });
    })
    // check 0 guests
    expect(dateInput.value).toBe("0");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    await act(async() => {
        fireEvent.click(submit);
    })
    // check the error message
    let requiredText = await screen.findByText("Please specify the amount of guests from 1 to 100");
    expect(requiredText).toBeInTheDocument();
});

test('101 guests', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter 101 guests
    let dateInput = dom.container.querySelector("#guests");
    await act(async() => {
        fireEvent.change(dateInput, {
            target: {value: '101'}
        });
    })
    // check 101 guests
    expect(dateInput.value).toBe("101");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    await act(async() => {
        fireEvent.click(submit);
    })
    // check the error message
    let requiredText = await screen.findByText("Please specify the amount of guests from 1 to 100");
    expect(requiredText).toBeInTheDocument();
});

test('empty comment', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter comment input
    let commentInput = dom.container.querySelector("#comment");
    await act(async() => {
        fireEvent.change(commentInput, {
            target: {value: ''}
        });
    })
    // check comment input
    expect(commentInput.value).toBe("");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    await act(async() => {
        fireEvent.click(submit);
    })
    // check the error message
    let requiredText = await screen.findByText("Please provide your comment");
    expect(requiredText).toBeInTheDocument();
});

test('short comment', async() => {
    const dom = render(
        <AlertProvider>
            <Booking />
        </AlertProvider>
    );

    // enter comment input
    let commentInput = dom.container.querySelector("#comment");
    await act(async() => {
        fireEvent.change(commentInput, {
            target: {value: 'value'}
        });
    })
    // check comment value
    expect(commentInput.value).toBe("value");

    // click submit
    let submit = await dom.container.querySelector("#booking-submit");
    await act(async() => {
        fireEvent.click(submit);
    })
    // check the error message
    let requiredText = await screen.findByText("Your comment must be at least 25 characters!");
    expect(requiredText).toBeInTheDocument();
});