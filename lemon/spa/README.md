# Little Lemon
This project was done as part of <b>Meta-Front End Developer Professional Certificate</b>

A <b>Single Page Application</b> is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

## Start up

1. Start up json-server
```bash
json-server --watch db.json --port 5555
```

2. Start up React
```bash
npm start
```

## Content
* [How to create a DB mock](#how-to-create-a-db-mock)
* [How to create and share global properties](#how-to-create-and-share-global-properties)
* [How to add a custom color for a button](#how-to-add-a-custom-color-for-a-button)
* [How to update date in Formik](#how-to-update-date-in-formik)
* [TODOs](#todos)

### How to create a DB mock

1. Install json-server

```bash
npm i -g json-server
```

2. Add json data. For example, db.json

3. Run json-server
```bash
json-server --watch db.json --port 5555
```

### How to create and share global properties

1. Create a .env file in the root of the React app
2. Add variables. Each variable should start with a <b>REACT_APP_</b> for it to work.
3. Import variables using <b>process.env.REACT_APP_</b>
```jsx
return (
  <div>
    <h1>
      We are using {process.env.REACT_APP_DATABASE}
    </h1>
  </div>
);
```

### How to add a custom color for a button

Chakra button component looks like:
```jsx
<Button
    type="submit"
    colorScheme="lemon"
    width="full"
    disabled={isLoading}
    isLoading={isLoading}>
    Submit
</Button>
```
Use the <b>colorScheme</b> prop to change the color scheme of the Button. You can set the value to any of the color scales from your design system, like whiteAlpha, blackAlpha, gray, red, blue, or your custom color scale.

https://chakra-ui.com/docs/components/button/usage

But the colorScheme just accepts the color name. So if we want to add our color we would need to specify our custom color.

To do it we need to extend the standard Chakra theme.
```jsx
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    lemon: {
      500: "#b2c3af"
    }
  }
});

function App() {
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <Header/>
        <Nav/>
          <AlertProvider>
            <BrowserRouter>
              <Main/>
            </BrowserRouter>
            <Alert/>
          </AlertProvider>
        <Footer/>
      </ChakraProvider>
    </Fragment>
  );
}
```

If we inspect the way Chakra works to generate the colorScheme for a solid button, we can notice that it calls ${c}.500.

It means that when you create your own color scheme, you need to specify one color for 500.

Then we can use lemon color for our button.

### How to update date in Formik

Declare useFormik hook
```jsx
const formik = useFormik({
    initialValues: {
        fullName: '',
        email: '',
        phone: '',
        type: 'business',
        date: new Date(),
        guests: '',
        comment: ''
    },

    validationSchema: Yup.object({
        fullName: Yup.string()
                    .label("name")
                    .required('Required'),
        email:    Yup.string()
                    .label("email")
                    .email('Invalid email address')
                    .required('Required'),
        phone:    Yup.string()
                    .label("phone")
                    .matches('[0-9]{11,11}', 'Phone number should consist of 11 numbers')
                    .required('Required'),
        type:     Yup.string()
                    .label("type")
                    .required('Required'),
        date:     Yup.string()
                    .label('date')
                    .required(),
        guests:   Yup.string()
                    .label("guests")
                    .matches('^[1-9][0-9]?$|^100$', 'Please specify the amount of guests from 1 to 100')
                    .required('Required'),
        comment:  Yup.string()
                    .label("comment")
                    .min(25, "Must be at least 25 characters!")
                    .required('Required')
    }),

    onSubmit: (values) => {
        submit("http://localhost.me", values);
    },
});
```

Update date using Chakra library
```jsx
<FormControl isInvalid={formik.touched.date && formik.errors.date}>
    <FormLabel htmlFor="date">Date</FormLabel>
    <SingleDatepicker
        id="date"
        name="date"
        type="date"
        format="yyyy-MM-dd"
        onDateChange={value => formik.setFieldValue('date', value)}
        onBlur={formik.handleBlur}
        minDate={new Date()}
        date={formik.values.date}
    />
    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
</FormControl>
```


### TODOs

Add another picture in about and do overlapping + change z position by click on the picture.