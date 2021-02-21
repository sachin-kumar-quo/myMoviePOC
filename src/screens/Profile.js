import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default Profile = ({onClick}) =>{
    return(
        <LinearGradient
            style={styles.profileView}
            colors={['#cc2b5e','#753a88']}>
            <TouchableOpacity onPress={onClick}>
                <Text>
                    sign out
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    profileView: {
        flex: 1
    }
})
