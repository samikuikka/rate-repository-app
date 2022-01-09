import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUpForm from './SignUpForm';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
    username: '',
    password: '',
    confirmation: '',
};

const validationSchema = yup.object().shape({
    username: yup
                .string()
                .required('Username is required')
                .min(1, 'Username length must be between 1 and 50 characters')
                .max(30, 'Username length must be between 1 and 50 characters'),
    password: yup
                .string()
                .required('Password is required')
                .min(5, "Password length must be between 5 and 50 characters")
                .max(50, "Password length must be between 5 and 50 characters"),
    confirmation: yup
                    .string()
                    .oneOf([yup.ref('password'), null], "Password and confirmation must match")
                    .required('Password confirm is required'),        

});

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn()
    let history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signUp({username, password})
            const { data } = await signIn({username, password})
            console.log(data)
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({handleSubmit, isValid}) => <SignUpForm onSubmit={handleSubmit} isValid={isValid} />}
        </Formik>
    );
}

export default SignUp;