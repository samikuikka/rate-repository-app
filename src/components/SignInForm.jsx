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
    
})

const SignInForm = ({onSubmit}) => {
  return (
      <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
          <View style={styles.buttonContainer}>
              <Pressable onPress={onSubmit}>
                  <Text fontWeight='bold' style={{color: 'white'}}>Sign in</Text>
              </Pressable>
          </View>
      </View>
  );
};

export default SignInForm;