import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CardStyles'

export default Card = ({ coverPhoto, releaseDate, movieName }) => {
    
    return(
        <View style={styles.conatainer}>
            <Image 
                style={styles.image}
                source={{
                    uri:`https://image.tmdb.org/t/p/w500/${coverPhoto}`
                }}/>
            <Text style={styles.name}>
                {movieName}
            </Text>
            <Text style={styles.date}>
                {releaseDate}
            </Text>
        </View>
    )
}