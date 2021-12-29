import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({description, forksCount, fullName, id, language, ownerAvatarUrl, ratingAverage, reviewCount, stargazersCount }) => {
    return(
        <View>
            <Text>Full name: {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Language: {language}</Text>
            <Text>Stars: {stargazersCount}</Text>
            <Text>Fork: {forksCount}</Text>
            <Text>Reviews: {reviewCount}</Text>
            <Text>Rating: {ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;