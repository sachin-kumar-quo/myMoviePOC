import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Styles';
import ValidateInput from '../../../utils/validation/ValidateInput';

export default Login = ({navigation, toggleSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@signed_user', value);
    } catch (e) {
      console.log(e);
    }
  };

  const logIn = () => {
    if (ValidateInput(email, password)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          storeData(email);
          alert(`welcome ${email}`);
          toggleSignIn();
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
        });
    }
  };
  
  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <LinearGradient style={Styles.loginView} colors={['#cc2b5e', '#753a88']}>
        <View style={Styles.formContainer}>
          <Text style={Styles.heading}>LOGIN</Text>
          <View style={Styles.inputContainer}>
            <Text style={Styles.label}>Username/Email: </Text>
            <TextInput
              style={Styles.input}
              placeholder="e.g. abc@def.com"
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="#000"
            />
            <Text style={Styles.label}>Password: </Text>
            <TextInput
              style={Styles.input}
              placeholder="password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#000"
            />
            <TouchableOpacity onPress={logIn} style={Styles.loginButton}>
              <Text style={{alignSelf: 'center', fontSize: 25}}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{color: 'white'}}>Forget Password</Text>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
