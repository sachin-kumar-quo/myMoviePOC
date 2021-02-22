import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default PopularHeading = () => {
    return (
        <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}> Popular <Icon name="account-star" size={40} /></Text>
    )
}