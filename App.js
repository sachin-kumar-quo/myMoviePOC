import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import MovieProfile from './src/screens/main/movieprofile';
import List from './src/screens/main/list';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthTab from './src/tabs/AuthTab';
import MainDrawer from './src/drawers/MainDrawer';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export default App = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  const isSignedIn = useSelector((state) => state.isSignedIn);
  useEffect(() => {
    // isUserSignedIn();
    console.log(isSignedIn);
  }, [isSignedIn]);

  // const isUserSignedIn = async () => {
  //   let value = await AsyncStorage.getItem('@signed_user');
  //   if (value !== null) {
  //     setIsSignedIn(true);
  //   } else {
  //     setIsSignedIn(false);
  //   }
  // };

  // const toggleSignIn = () => {
  //   if (isSignedIn) {
  //     auth()
  //       .signOut()
  //       .then(() => console.log('User signed out!'));
  //   }
  //   setIsSignedIn(!isSignedIn);
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isSignedIn ? (
          <Stack.Screen
            name="Auth"
            children={() => <AuthTab />}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Main"
              children={() => <MainDrawer />}
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
                    style={styles.logo}
                    source={require('./src/images/quovantisIcon.png')}
                  />
                ),
                title: 'MyMoviePOC',
                headerStyle: styles.headerBackground,
                headerTitleStyle: styles.titleStyle,
              })}
            />
            <Stack.Screen
              name="MovieProfile"
              component={MovieProfile}
              options={{
                headerStyle: styles.headerBackground,
                headerTitleStyle: styles.titleStyle,
              }}
            />
            <Stack.Screen
              name="MovieList"
              component={List}
              options={{
                headerStyle: styles.headerBackground,
                headerTitleStyle: styles.titleStyle,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: '#a31f71',
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 10,
    marginBottom: 5,
  },
  titleStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
