import React,{useState} from "react";
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Styles';

export default SignUp = ({toggleSignIn})=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const isValid = () =>{
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if(!emailReg.test(email)){
            alert("Enter valid Email Address");
            return false;
        }
        if (password.length < 8) {
            alert("Invalid password format, length should be greater than 8");
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
        if (isValid()) {
            auth()
                .createUserWithEmailAndPassword(email,password)
                .then(() => {
                    storeData(email);
                    alert(`welcom ${email}`);
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
            style={Styles.signUpView}
            colors={['#cc2b5e','#753a88']}>
            <View style={Styles.formContainer}>
                <Text style={Styles.heading}>SignUp</Text>
                <View style={Styles.inputContainer}>
                    <Text style={Styles.label}>Email: </Text>
                    <TextInput 
                        style={Styles.input}
                        placeholder="e.g. abc@def.com"
                        textContentType='emailAddress'
                        onChangeText={text => setEmail(text)}
                        placeholderTextColor="#000"/>
                    <Text style={Styles.label}>Password: </Text>
                    <TextInput 
                        style={Styles.input}
                        placeholder="password"
                        textContentType='password'
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        placeholderTextColor="#000"/>
                    <TouchableOpacity style={Styles.signUpButton} onPress={signUp}><Text style={{alignSelf:'center',fontSize:25}}>Sign-Up</Text></TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}
