import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Text } from 'react-native';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

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

return (
  <FlatList
    data={repositoryNodes}
    // Other props
    ItemSeparatorComponent={ItemSeparator}
    renderItem={renderItem}
  />
);
};

export default RepositoryList;