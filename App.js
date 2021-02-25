import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import auth from '@react-native-firebase/auth';
import MovieProfile from './src/screens/main/movieprofile';
import List from './src/screens/main/list';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthTab from './src/tabs/AuthTab';
import MainDrawer from './src/drawers/MainDrawer';
const Stack = createStackNavigator();

export default App = ({navigation}) => {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    isSignedIn();
  }, [signedIn]);

  const isSignedIn = async () => {
    const value = await AsyncStorage.getItem('@signed_user');
    if (value !== null) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  };
  const toggleSignIn = () => {
    if (signedIn) {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }
    setSignedIn(!signedIn);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!signedIn && (
          <Stack.Screen
            name="Auth"
            children={() => <AuthTab toggleSignIn={toggleSignIn} />}
            options={{headerShown: false}}
          />
        )}
        {signedIn && (
          <>
            <Stack.Screen
              name="Main"
              children={() => <MainDrawer toggleSignIn={toggleSignIn} />}
              options={({navigation}) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(DrawerActions.toggleDrawer())
                    }>
                    <Icon name="ios-menu" size={45} color="white" />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      marginRight: 10,
                      marginBottom: 5,
                    }}
                    source={require('./src/images/quovantisIcon.png')}
                  />
                ),
                title: 'MyMoviePOC',
                headerStyle: {
                  backgroundColor: '#a31f71',
                },
                headerTitleStyle: {
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 30,
                },
              })}
            />
            <Stack.Screen
              name="MovieProfile"
              component={MovieProfile}
              options={{
                headerStyle: {
                  backgroundColor: '#a31f71',
                },
                headerTitleStyle: {
                  color: 'white',
                  fontSize: 30,
                },
              }}
            />
            <Stack.Screen
              name="MovieList"
              component={List}
              options={{
                headerStyle: {
                  backgroundColor: '#a31f71',
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
