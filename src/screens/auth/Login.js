import React,{useState} from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default Login = ({navigation,onClick})=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const validate =() =>{
        if(email===""){
            alert("Enter valid Email Address");
        }
        if(password===""){
            alert("Enter valid Password")
        }
    }

    const logIn = () =>{
        validate();
        onClick();
    }


    return(
        <LinearGradient
            style={styles.loginView}
            colors={['#cc2b5e','#753a88']}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>LOGIN</Text>
                <View >
                    <Text style={{fontSize:20,color:'white'}}>Username/Email: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="e.g. abc@def.com"
                        onChangeText={text=>setEmail(text)}/>
                    <Text style={{fontSize:20,color:"white"}}>Password: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={text=>setPassword(text)}/>
                    <TouchableOpacity onPress={logIn} style={styles.loginButton}><Text style={{alignSelf:'center',fontSize:25}}>LOGIN</Text></TouchableOpacity>
                    <Text style={{color:'white'}}>Forget Password</Text>
                </View>
            </View>
            
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    loginView:{
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
    loginButton:{
        backgroundColor:'orange',
        margin:4,
        padding:10
    },
    input:{
        borderColor:'#ffdedb',
        borderRadius:2,
        borderWidth:1,
        height:30,
        marginVertical: 5
    }
})