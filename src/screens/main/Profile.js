import React, { useState,useEffect } from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Profile = ({ onClick }) => {
    const [signedUser, setSignedUser] = useState("");
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@signed_user');

            if(value !== null) {
                setSignedUser(value);
            }
        } catch(e) {
            alert(e);
        }
    }
    const signOut = async() => {
        try {
            await AsyncStorage.removeItem('@signed_user');
            onClick();
        } catch (error) {
            alert(error);
        }
    }
    return(
        <LinearGradient
            style={styles.profileView}
            colors={['#cc2b5e', '#753a88']}>
            <Text style={{
                color: 'white', fontSize: 30, textAlign: 'center'}}>
                Welcome {signedUser}
            </Text>
            <TouchableOpacity onPress={signOut}>
                <Text style={{color:'yellow',textAlign:'center',fontSize:20}}>SignOut</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    profileView: {
        flex: 1
    }
})
