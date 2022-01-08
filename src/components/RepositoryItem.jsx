import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import Text from './Text'
import ItemStat from './ItemStat'
import { useHistory, useParams } from 'react-router-native';
import theme from '../theme';
import * as Linking from 'expo-linking';

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
        alignItems: "flex-start"
    },
    columnContainer: {
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
    },
    bottomContainer: {  
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
    },

})

const RepositoryItem = ({description, forksCount, fullName, id, language, ownerAvatarUrl, ratingAverage, reviewCount, stargazersCount, url}) => {
    const history = useHistory();
    const params = useParams();
    
    return(
        <Pressable onPress={() => history.push(`/repository/${id}`)}>
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image 
                        style={styles.logo}
                        source={{uri: `${ownerAvatarUrl}`}}
                    />
                    <View style={styles.columnContainer}>
                        <Text fontWeight="bold" testID={`${id}:fullName`}>{fullName}</Text>
                        <Text color="textSecondary" testID={`${id}:description`} flexText>{description}</Text>
                        <Text testID={`${id}:language`} languageTag>{language}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <ItemStat title="Stars" count={stargazersCount}  id={id}/>
                    <ItemStat title="Forks" count={forksCount} id={id}/>
                    <ItemStat title="Reviews" count={reviewCount} id={id}/>
                    <ItemStat title="Rating" count={ratingAverage} id={id}/>
                </View>
                { params.id && 
                    <Pressable onPress={() => Linking.openURL(url)}>
                        <View style={styles.buttonContainer}>
                            <Text fontWeight='bold' style={{color: 'white'}}>Open in GitHub</Text>
                        </View>
                    </Pressable>
                }
            </View>
        </Pressable>
    );
};

export default RepositoryItem;