import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 1,
    }

})

const ReviewItem = (item) => {
    const asDate = new Date(item.createdAt);
    let newDate = ('0' + asDate.getDate()).slice(-2) + '.'
    + ('0' + (asDate.getMonth()+1)).slice(-2) + '.'
    + asDate.getFullYear();

    return(
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View  style={styles.circle}>
                    <Text fontWeight="bold" color="primary">{item.rating}</Text>
                </View> 
                <View style={styles.columnContainer}>
                    <Text fontWeight="bold">{item.username}</Text>
                    <Text color="textSecondary">{newDate}</Text>
                    <Text>{item.text}</Text>
                </View>   
            </View>
        </View>
    );
}

export default ReviewItem;