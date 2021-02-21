import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default SearchCard = ({movie}) => {
    return (
        <View style={styles.cardBody}>
            <Text style={styles.movieName}>{movie.original_title}</Text>
            <Text style={styles.releaseYear}>{movie.release_date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    movieName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        opacity:1
    },
    releaseYear: {
        fontSize: 20,
        color: 'white',
        opacity:2
    },
    cardBody: {
        marginHorizontal: 30,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        paddingVertical: 10,
        borderBottomColor: 'violet',
        borderWidth:.3
    }
})