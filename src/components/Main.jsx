import React from 'react';
import { StyleSheet, View, Platform, Text} from 'react-native';
import { Route, Switch, Redirect, useParams} from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepo from './SingleRepo';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8"
  },
});

const Main = () => {

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/repository/:id">
          <SingleRepo />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;