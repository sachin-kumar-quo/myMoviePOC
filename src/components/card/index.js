import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './Styles';
import {getImgUrl} from '../../utils/fetchData/getUrl';

export default Card = ({coverPhoto, releaseDate, movieName}) => {
  return (
    <View style={Styles.conatainer}>
      <Image
        style={Styles.image}
        source={{
          uri: getImgUrl(coverPhoto),
        }}
      />
      <Text style={Styles.name}>{movieName}</Text>
      <Text style={Styles.date}>{releaseDate}</Text>
    </View>
  );
};
