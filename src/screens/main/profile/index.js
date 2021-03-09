import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../../store/actions';
export default Profile = () => {
  const signedUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  return (
    <LinearGradient style={Styles.gradient} colors={['#cc2b5e', '#753a88']}>
      <Text style={Styles.welcomeNote}>Welcome {signedUser}</Text>
      <TouchableOpacity onPress={() => dispatch(signOut())}>
        <Text style={Styles.signOut}>SignOut</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
