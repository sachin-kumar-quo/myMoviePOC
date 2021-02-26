import React, { useState,useEffect } from 'react';
import {Text,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Styles';
export default Profile = ({ signOut }) => {
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
            alert("ThankYou")
            signOut();
        } catch (error) {
            alert(error);
        }
    }

    return(
        <LinearGradient
            style={Styles.gradient}
            colors={['#cc2b5e', '#753a88']}>
            <Text style={Styles.welcomeNote}>
                Welcome {signedUser}
            </Text>
            <TouchableOpacity onPress={signOutUser}>
                <Text style={Styles.signOut}>SignOut</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
