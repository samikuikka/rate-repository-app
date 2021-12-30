import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  appBarText: {
    color: theme.appBar.text,
    fontWeight: theme.fontWeights.bold,
    flexGrow: 1
  },
  languageTag: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    borderColor: theme.colors.primary,
    overflow: 'hidden',
    backgroundColor: theme.colors.primary,
    color: 'white',
  }
});

const Text = ({ color, fontSize, fontWeight, style, appBar, languageTag,  ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    appBar && styles.appBarText,
    languageTag && styles.languageTag,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;