import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

export default Card = ({ coverPhoto, releaseDate, movieName }) => {
    const windowWidth = Dimensions.get('window').width;
    return(
        <View style={{width:windowWidth*.45,height:350,margin:10,shadowColor:'black', shadowRadius:5,shadowOpacity:.5}}>
            <Image 
                style={{height:undefined, width:"100%", aspectRatio:2/3}}
                source={{
                    uri:`https://image.tmdb.org/t/p/w500/${coverPhoto}`
                }}/>
            <Text style={{textAlign:'center',color:'white',fontSize:20,paddingTop:5}}>
                {movieName}
            </Text>
            <Text style={{textAlign:'center',color:'white',fontSize:15}}>
                {releaseDate}
            </Text>
        </View>
    )
}