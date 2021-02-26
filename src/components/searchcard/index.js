import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default SearchCard = ({movie,searchPressed}) => {
    return (
        <View style={Styles.cardBody}>
            <Text style={Styles.movieName}>{movie.original_title}</Text>
            <Text style={Styles.releaseYear}>{movie.release_date}</Text>
            {searchPressed && <Text style={Styles.releaseYear} numberOfLines={3}>{movie.overview}</Text>}
        </View>
    )
}
