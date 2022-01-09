import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { REPOSITORY } from '../graphql/quesries';
import { FlatList, StyleSheet, View } from 'react-native';
import ReviewItem from './ReviewItem';
import RepositoryInfo from './RepositoryInfo';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
  
const ItemSeparator = () => <View style={styles.separator} />;

const renderReview = ({item}) => {
    return(
        <ReviewItem
            createdAt={item.createdAt}
            rating={item.rating}
            text={item.text}
            username={item.user.username}
        />
    );
}

const SingleRepo = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { id: id }
    })
    if(loading) return null
    const item = data.repository;

    const reviews = item ? item.reviews.edges.map(edge => edge.node) : []
    
    return(       
            <FlatList
                data={reviews}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderReview}
                ListHeaderComponent={ () => (
                    <RepositoryInfo
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
                )}
            />
    );
}

export default SingleRepo;