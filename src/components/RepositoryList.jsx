import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  orderingMenu: {
    paddingBottom: 30,
    paddingTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  pickerText: {
    fontSize: 15,
  }
});


const ItemSeparator = () => <View style={styles.separator} />;

export const renderItem = ({item}) => (
  <RepositoryItem 
      description={item.description}
      forksCount={item.forksCount}
      fullName={item.fullName}
      id={item.id}
      language={item.language}
      ownerAvatarUrl={item.ownerAvatarUrl}
      ratingAverage={item.ratingAverage}
      reviewCount={item.reviewCount}
      stargazersCount={item.stargazersCount}
      url={item.url}
      />
);

const OrderingMenu = ({selectedSorting, setSelectedSorting}) => {

  return(
    <Picker
      selectedValue={selectedSorting}
      onValueChange={ (itemValue, itemIndex) => setSelectedSorting(itemValue)}
      style={styles.orderingMenu}
    >
      <Picker.Item label="Latest repositories" value="latest" style={styles.pickerText}/>
      <Picker.Item label="Highest rated repositories" value="highestRated" style={styles.pickerText}/>
      <Picker.Item label="Lowest rated repositories" value="lowestRated" style={styles.pickerText}/>
    </Picker>
  );
};


export const RepositoryListContainer = ({ repositories, selectedSorting, setSelectedSorting }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      ListHeaderComponent={() => <OrderingMenu selectedSorting={selectedSorting} setSelectedSorting={setSelectedSorting}/>}
    />
  );
};


const RepositoryList = () => {
  const [selectedSorting, setSelectedSorting] = useState("latest");
  const { repositories } = useRepositories(selectedSorting);

  return <RepositoryListContainer repositories={repositories} selectedSorting={selectedSorting} setSelectedSorting={setSelectedSorting} />;
};

export default RepositoryList;