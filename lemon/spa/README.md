# Little Lemon
This project was done as part of <b>Meta-Front End Developer Professional Certificate</b>

A <b>Single Page Application</b> is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

## Content
* [How to update date in Formik](#how-to-update-date-in-formik) - as a simple static HTML5 website with native JS functions and CSS styles

### How to update date in Formik

Formik hook
```js
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
```js
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