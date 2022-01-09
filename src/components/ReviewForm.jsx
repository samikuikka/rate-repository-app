import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 6,
    },
    disapledButton: {
        backgroundColor: theme.colors.textSecondary,
        borderColor: theme.colors.textSecondary
    }
    
})


const ReviewForm = ({onSubmit, isValid}) => {
    if(!isValid) {
        return(
            <View style={styles.container}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
            <FormikTextInput name="text" placeholder="Review" multiline={true}/>
            <Pressable onPress={onSubmit} disapled>
                <View style={[styles.buttonContainer, styles.disapledButton]}>
                    <Text fontWeight="bold" style={{color: 'white'}}>Create a review</Text>
                </View>
            </Pressable>
        </View>
        );
    }

    return(
        <View style={styles.container}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
            <FormikTextInput name="text" placeholder="Review" />
            <Pressable onPress={onSubmit}>
                <View style={styles.buttonContainer}>
                    <Text fontWeight="bold" style={{color: 'white'}}>Create a review</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default ReviewForm;