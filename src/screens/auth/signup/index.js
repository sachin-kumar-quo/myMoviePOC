import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import {useDispatch} from 'react-redux';
import {signUp} from '../../../store/actions';

export default SignUp = ({toggleSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <LinearGradient style={Styles.signUpView} colors={['#cc2b5e', '#753a88']}>
      <View style={Styles.formContainer}>
        <Text style={Styles.heading}>SignUp</Text>
        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Email: </Text>
          <TextInput
            style={Styles.input}
            placeholder="e.g. abc@def.com"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#000"
          />
          <Text style={Styles.label}>Password: </Text>
          <TextInput
            style={Styles.input}
            placeholder="password"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            style={Styles.signUpButton}
            onPress={() => dispatch(signUp(email, password))}>
            <Text style={{alignSelf: 'center', fontSize: 25}}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
