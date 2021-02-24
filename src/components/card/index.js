import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './Styles'

export default Card = ({ coverPhoto, releaseDate, movieName }) => {
    
    return(
        <View style={Styles.conatainer}>
            <Image 
                style={Styles.image}
                source={{
                    uri:`https://image.tmdb.org/t/p/w500/${coverPhoto}`
                }}/>
            <Text style={Styles.name}>
                {movieName}
            </Text>
            <Text style={Styles.date}>
                {releaseDate}
            </Text>
        </View>
    )
}