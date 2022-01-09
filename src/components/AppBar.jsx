import React, { useEffect, useState } from 'react';
import { View,  StyleSheet, Pressable,  ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/quesries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from 'react-router-native';


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
      marginRight: 10
  },
  scrollView: {
    
  }
});

const AppBar = () => {
  const history = useHistory();
  const { data, error, loading } = useQuery(AUTHORIZE_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/signIn")
  }

  //logged in
  if(data && data.authorizedUser) {
    return(
      <View style={styles.container}>
      <ScrollView horizontal >
        <Pressable style={styles.flexItem} onPress={() => console.log("Click!")}>
            <Link to="/">
              <Text appBar>Repositories</Text>
            </Link>
          </Pressable>
          <Pressable style={styles.flexItem} onPress={() => console.log('hi')}>
            <Link to="/review">
              <Text appBar>Create a review</Text>
            </Link>
          </Pressable>
            <Pressable style={styles.flexItem} onPress={async () => await logout()}>     
                <Text appBar>Sign out</Text>
            </Pressable>       
      </ScrollView>
    </View>
    );
  }

  
  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <Pressable style={styles.flexItem} onPress={() => console.log("Click!")}>
            <Link to="/">
              <Text appBar>Repositories</Text>
            </Link>
          </Pressable>       
          <Pressable style={styles.flexItem} onPress={() => console.log('click')}>
            <Link to="/signIn">
              <Text appBar>Sign in</Text>
            </Link>
          </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;