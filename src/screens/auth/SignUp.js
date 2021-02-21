import React,{useState} from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default SignUp = ({onClick})=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const validate = () =>{
        if(name===""){
            alert("Enter Valid name");
        }
        if(email===""){
            alert("Enter valid Email");
        }
        if(password===""){
            alert("Enter valid Password");
        }
    }

    const signUp = () =>{
        validate();
        onClick();
    }

    return(
        <LinearGradient
            style={styles.signUpView}
            colors={['#cc2b5e','#753a88']}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>SignUp</Text>
                <View >
                    <Text style={{fontSize:20,color:'white'}}>name: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="e.g. John"
                        onChangeText={text=>setName(text)}/>
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
                    <Text style={{color:'white'}}>Forget Password</Text>
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
        color:'white'
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