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

const SignInForm = ({onSubmit, isValid}) => {
if(!isValid) {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
            <Pressable onPress={onSubmit} disabled>
                <View style={[styles.buttonContainer, styles.disapledButton]}>
                    <Text fontWeight='bold' style={{color: 'white'}}>Sign in</Text>
                </View>
            </Pressable>
        </View>
    );
}
  return (
      <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
          <Pressable onPress={onSubmit} testID="submit:button">
            <View style={styles.buttonContainer}>
                  <Text fontWeight='bold' style={{color: 'white'}}>Sign in</Text>
            </View>
          </Pressable>
      </View>
  );
};

export default SignInForm;