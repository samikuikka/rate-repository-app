import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { REPOSITORY } from '../graphql/quesries';
import RepositoryItem from './RepositoryItem';
import { FlatList, StyleSheet } from 'react-native';
import { renderItem } from './RepositoryList';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
  
const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepo = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(REPOSITORY, {
        variables: { id: id }
    })
    if(loading) return null
    const item = data.repository;
    
    return(
        <FlatList
            data={[item]}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
        />
    );
}

export default SingleRepo;