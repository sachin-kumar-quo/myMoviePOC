import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default TopRatedHeading = () => {
    return (
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}> Top Rated <Icon name="fire" size={40}/></Text>
    )
}