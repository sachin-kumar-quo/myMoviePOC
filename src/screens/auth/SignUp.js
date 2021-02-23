import React,{useState} from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default SignUp = ({onClick})=>{
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
                    onClick();
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
                <View style={{borderTopWidth:1,borderColor:'white'}}>
                    <Text style={{fontSize:20,color:'white'}}>Email: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="e.g. abc@def.com"
                        textContentType='emailAddress'
                        onChangeText={text=>setEmail(text)}/>
                    <Text style={{fontSize:20,color:'white'}}>Password: </Text>
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
const styles = StyleSheet.create({
    signUpView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    formContainer:{
        borderWidth:1,
        borderRadius:4,
        borderColor:'violet',
        width:"70%",
        padding:5
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf: 'center',
        color: 'white',
        paddingVertical:10
    },
    signUpButton:{
        backgroundColor:'orange',
        margin:4,
        padding:10
    },
    input:{
        borderColor:'#ffdedb',
        borderRadius:2,
        borderWidth:1,
        height:30,
        marginVertical:5
    }
})