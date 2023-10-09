// Booking a table(the component for the table reservations page)
import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    Box,
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

import {useAlertContext} from "../hooks/alertContext";
import useSubmit from "../hooks/useSubmit";

function Booking() {
    const {isLoading, response, submit} = useSubmit();
    const {onOpen} = useAlertContext();

    const yupValidationSchema = Yup.object({
        fullName: Yup.string()
                  .label("name")
                  .required('Required Full Name'),
        email:    Yup.string()
                  .label("email")
                  .email('Invalid email address')
                  .required('Required Email address'),
        phone:    Yup.string()
                  .label("phone")
                  .matches('[0-9]{11,11}', 'Phone number should consist of 11 numbers')
                  .required('Required phone number'),
        type:     Yup.string()
                  .label("type")
                  .required('Required type of reservation'),
        date:     Yup.string()
                  .label("date")
                  .required('Required date'),
        guests:   Yup.string()
                  .label("guests")
                  .matches('^[1-9][0-9]?$|^100$', 'Please specify the amount of guests from 1 to 100')
                  .required('Required the amount of guests'),
        comment:  Yup.string()
                  .label("comment")
                  .min(25, "Your comment must be at least 25 characters!")
                  .required('Please provide your comment')
    });

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

        validationSchema: yupValidationSchema,

        onSubmit: (values) => {
          submit("http://localhost.me", values);
        },
    });

    // async update after formik->submit finishes it's work
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === 'success') {
                formik.resetForm();
            }
        }
    }, [formik, onOpen, response]);

    return (
      <Center>
        <VStack w="1024px" p={8} alignItems="center">
          <Heading as="h1" >
            Reserve a table
          </Heading>
          <Box p={6} rounded="md" w="100%" alignItems="center">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>

                <FormControl isInvalid={formik.touched.fullName && formik.errors.fullName}>
                  <FormLabel htmlFor="fullName">Full name</FormLabel>
                  <Input
                    id="fullName"
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.phone && formik.errors.phone}>
                  <FormLabel htmlFor="phone">Phone number</FormLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.type}>
                  <FormLabel htmlFor="type">Type of lunch</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.type}
                    >
                      <option value="business">Business</option>
                      <option value="birthday">Birthday</option>
                  </Select>
                  <FormErrorMessage>{formik.values.type}</FormErrorMessage>
                </FormControl>

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

                <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                  <FormLabel htmlFor="guests">Number of guests</FormLabel>
                  <Input
                    id="guests"
                    name="guests"
                    type="guests"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.guests}
                  />
                  <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>

                <Button
                  id="booking-submit"
                  type="submit"
                  color="yellow"
                  colorScheme="lemon"
                  width="full"
                  disabled={isLoading}
                  isLoading={isLoading}>
                    Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Center>
    );
}

export default Booking;