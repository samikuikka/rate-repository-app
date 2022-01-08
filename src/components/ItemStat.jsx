import React from 'react'
import { View, StyleSheet} from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    item: {
        flex: 1,
        alignSelf: 'center'
    }
})

const ItemStat = ({title, count, id}) => {

    if(count > 1000) {
        const number = count / 1000;
        const rounded = Math.round(number * 10) / 10;
        return(
            <View styles={styles.container}>
                <Text fontWeight="bold" testID={`${id}:${title}`}>{rounded}k</Text>
                <Text color="textSecondary" style={styles.item}>{title}</Text>
            </View>
        );
    }

    return(
        <View styles={styles.container}>
            <Text fontWeight="bold" style={styles.item} testID={`${id}:${title}`}>{count}</Text>
            <Text color="textSecondary" style={styles.item}>{title}</Text>
        </View>
    );
};

export default ItemStat;