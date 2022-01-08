import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Constants  from 'expo-constants';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({item}) => (
  <RepositoryItem 
      description={item.description}
      forksCount={item.forksCount}
      fullName={item.fullName}
      id={item.id}
      language={item.language}
      ownerAvatarUrl={item.ownerAvatarUrl}
      ratingAverage={item.ratingAverage}
      reviewCount={item.reviewCount}
      stargazersCount={item.stargazersCount} />
);


export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};


const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;