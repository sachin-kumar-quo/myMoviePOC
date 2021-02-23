import React, { useState,useEffect } from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ProfileStyles';
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
    const signOutUser = async() => {
        try {
            await AsyncStorage.removeItem('@signed_user');
            onClick();
        } catch (error) {
            alert(error);
        }
    }
    return(
        <LinearGradient
            style={styles.gradient}
            colors={['#cc2b5e', '#753a88']}>
            <Text style={styles.welcomeNote}>
                Welcome {signedUser}
            </Text>
            <TouchableOpacity onPress={signOutUser}>
                <Text style={styles.signOut}>SignOut</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
