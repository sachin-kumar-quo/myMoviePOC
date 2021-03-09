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
import Styles from './Styles';
import {useDispatch} from 'react-redux';
import {signIn} from '../../../store/actions';

export default Login = ({navigation, toggleSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
            <TouchableOpacity
              onPress={() => dispatch(signIn(email, password))}
              style={Styles.loginButton}>
              <Text style={{alignSelf: 'center', fontSize: 25}}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{color: 'white'}}>Forget Password</Text>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
