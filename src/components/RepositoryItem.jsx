import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text'
import ItemStat from './ItemStat'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    columnContainer: {
        display: "flex",
        flexDirection: "column",
        flexShrink: 1
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }

})

const RepositoryItem = ({description, forksCount, fullName, id, language, ownerAvatarUrl, ratingAverage, reviewCount, stargazersCount }) => {
    return(
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image 
                    style={styles.logo}
                    source={{uri: `${ownerAvatarUrl}`}}
                />
                <View style={styles.columnContainer}>
                    <Text fontWeight="bold" >{fullName}</Text>
                    <Text color="textSecondary" flexText>{description}</Text>
                    <Text languageTag>{language}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <ItemStat title="Stars" count={stargazersCount} />
                <ItemStat title="Forks" count={forksCount} />
                <ItemStat title="Reviews" count={reviewCount} />
                <ItemStat title="Rating" count={ratingAverage} />
            </View>
        </View>
    );
};

export default RepositoryItem;