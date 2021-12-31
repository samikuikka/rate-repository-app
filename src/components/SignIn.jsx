import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup
                .string()
                .min(4, 'Username must be at least 4 characters')
                .required('Username is required'),
    password: yup
                .string()
                .min(4, "Password must be at least 4 characters")
                .max(20, 'Password must be less than 20 chacaters')
                .required('Password is required'),
});

const SignIn = () => {

    const onSubmit = (values) => {
        console.log(values)
    }

  return (
        <Formik 
            initialValues={initialValues}
             onSubmit={onSubmit}
             validationSchema={validationSchema}
        >
            {({ handleSubmit, isValid }) => <SignInForm onSubmit={handleSubmit} isValid={isValid} />}
        </Formik>
  );
};

export default SignIn;