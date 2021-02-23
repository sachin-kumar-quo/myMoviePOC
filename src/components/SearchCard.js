import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from './SearchCardStyles';

export default SearchCard = ({movie,searchPressed}) => {
    return (
        <View style={styles.cardBody}>
            <Text style={styles.movieName}>{movie.original_title}</Text>
            <Text style={styles.releaseYear}>{movie.release_date}</Text>
            {searchPressed && <Text style={styles.releaseYear} numberOfLines={3}>{movie.overview}</Text>}
        </View>
    )
}
