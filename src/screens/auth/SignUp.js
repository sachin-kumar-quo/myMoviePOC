import React,{useState} from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './SignUpStyles';

export default SignUp = ({toggleSignIn})=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const validate = () =>{
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
    const signUp = () =>{
        if (validate()) {
            console.log(email, password);
            auth()
                .createUserWithEmailAndPassword(email,password)
                .then(() => {
                    console.log(email, password);
                    storeData(email);
                    toggleSignIn();
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert('That email address is already in use!');
                    }
                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }
                });
        }
    }

    return(
        <LinearGradient
            style={styles.signUpView}
            colors={['#cc2b5e','#753a88']}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>SignUp</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="e.g. abc@def.com"
                        textContentType='emailAddress'
                        onChangeText={text=>setEmail(text)}/>
                    <Text style={styles.label}>Password: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="password"
                        textContentType='password'
                        secureTextEntry={true}
                        onChangeText={text=>setPassword(text)}/>
                    <TouchableOpacity style={styles.signUpButton} onPress={signUp}><Text style={{alignSelf:'center',fontSize:25}}>Sign-Up</Text></TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}
