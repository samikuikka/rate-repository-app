import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        borderColor: theme.colors.textSecondary,
        borderRadius: 5
    },
    errorInput: {
      borderColor: '#d73a4a'
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input, error && styles.errorInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;