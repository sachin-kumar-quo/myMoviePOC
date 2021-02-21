import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

export default Card = ({ coverPhoto, releaseDate, movieName }) => {
    const windowWidth = Dimensions.get('window').width;
    return(
        <View style={{width:windowWidth*.45,height:350,margin:10}}>
            <Image 
                style={{height:"90%", width:"100%"}}
                source={{
                    uri:`https://image.tmdb.org/t/p/w500/${coverPhoto}`
                }}/>
            <Text style={{textAlign:'center'}}>
                {movieName}
            </Text>
            <Text style={{textAlign:'center'}}>
                {releaseDate}
            </Text>
        </View>
    )
}