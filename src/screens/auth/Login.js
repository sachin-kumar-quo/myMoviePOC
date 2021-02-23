import React,{useState} from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LoginStyles';

export default Login = ({navigation,onClick})=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const isValid = () => {
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if(!emailReg.test(email)){
            alert("Enter valid Email Address");
            return false;
        }
        if(!passReg.test(password)){
            alert("Enter valid Password");
            return false;
        }
        return true;
    }
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@signed_user', value)
        } catch (e) {
            console.log(e);
        }
    }
    const logIn = () =>{
        if (isValid()) {
            auth()
                .signInWithEmailAndPassword(email,password)
                .then(() => {
                    storeData(email);
                    onClick();
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }
                });
        }
    }
    return(
        <LinearGradient
            style={styles.loginView}
            colors={['#cc2b5e','#753a88']}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>LOGIN</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username/Email: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="e.g. abc@def.com"
                        onChangeText={text => setEmail(text)}
                        placeholderTextColor="#000"/>
                    <Text style={styles.label}>Password: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        placeholderTextColor="#000"/>
                    <TouchableOpacity onPress={logIn} style={styles.loginButton}><Text style={{alignSelf:'center',fontSize:25}}>LOGIN</Text></TouchableOpacity>
                    <Text style={{color:'white'}}>Forget Password</Text>
                </View>
            </View>
            
        </LinearGradient>
    )
}
