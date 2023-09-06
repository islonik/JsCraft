import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, output, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: ''
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
                    .label("Name")
                    .required('Required'),
      email:     Yup.string()
                    .label("Email Address")
                    .email('Invalid email address')
                    .required('Required'),
      type:      Yup.string()
                    .label("Type of enquiry")
                    .required('Required'),
      comment:   Yup.string()
                    .label("Your message")
                    .min(25, "Must be at least 25 characters!")
                    .required('Required')
    }),

    // Pass resetForm as a parameter to your onSubmit function. 
    // That should give your function access to the resetForm method from Formik. 
    // If you want to use any methods from the formik library inside your onSubmit function, first pass a parameter to the function so you can have access to the formik method.
    onSubmit: async (values, {setSubmitting, resetForm}) => {

      await submit("localhost", values);

      if (!isLoading && output.current != null) {
        onOpen(output.current.type, output.current.message);

        if (output.current.type == 'success') {
          //alert(JSON.stringify(values, null, 2));

          resetForm();
        }
      } else {
        console.log("Something wrong in useSubmit hook!");
      }

      setSubmitting(false);
      
    }
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={8} alignItems="flex-start">
        <Heading as="h1" >
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>

              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
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

              <FormControl isInvalid={formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}
                  >
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">
                      Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.values.type}</FormErrorMessage>
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
                type="submit" 
                colorScheme="purple" 
                width="full" 
                disabled={formik.isSubmitting} 
                isLoading={isLoading}>
                  Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
