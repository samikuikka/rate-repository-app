import React from 'react';
import { Formik } from 'formik';
import * as yup  from 'yup';
import ReviewForm from './ReviewForm';
import useReview from '../hooks/useReview';
import { useHistory } from 'react-router-native';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
}

const validationSchema = yup.object().shape({
    ownerName: yup
                        .string()
                        .required('Repository owner name is requried'),
    repositoryName: yup
                        .string()
                        .required('Repository name is required'),
    rating: yup
                .number()
                .min(0, 'Ratinng must be between 0 and 100' )
                .max(100, 'Ratinng must be between 0 and 100')
                .required('Rating is required'),
    text: yup.string()
})

const Review = () => {
    const [sendReview] = useReview();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { rating, repositoryName, ownerName, text } = values;
        try {
            console.log(values);
            const {data} = await sendReview({rating, ownerName, repositoryName, text})
            history.push(`/repository/${data.createReview.repositoryId}`)
        } catch(e) {
            console.log(e);
        }
    };

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            { ({handleSubmit, isValid}) => <ReviewForm onSubmit={handleSubmit} isValid={isValid} />}
        </Formik>
    )
}

export default Review;