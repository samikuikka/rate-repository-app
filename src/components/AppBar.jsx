import React from 'react';
import { View,  StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: theme.appBar.background,
    padding: 10,
  },
  flexItem: {
      flexGrow: 1,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.flexItem} onPress={() => console.log("Click!")}>
            <Text appBar>Repositories</Text>
        </Pressable>
    </View>
  );
};

export default AppBar;