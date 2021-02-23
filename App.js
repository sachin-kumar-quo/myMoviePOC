import React,{useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/main/Home';
import Profile from './src/screens/main/Profile';
import Search from './src/screens/main/Search';
import MovieProfile from './src/screens/main/MovieProfile';
import List from './src/screens/main/List'
import Icon from 'react-native-vector-icons/Ionicons';
import AuthTab from './src/tabs/AuthTab';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default App = ({navigation}) => {
  const [signedIn, setSignedIn] = useState(false);
  
  useEffect(() => {
    isSignedIn();
  },[signedIn])

  const isSignedIn = async () => {
    const value = await AsyncStorage.getItem('@signed_user');
    if (value !== null) {
      setSignedIn(true);
    }
  }
  const toggleSignIn = () => {
    setSignedIn(!signedIn);
  }
  // drawer navigation 
  const MainDrawer = () =>(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={HomeTab}/>
      <Drawer.Screen name="Search" component={Search}/>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
  // Home tab navigation with home, Search, Profile
  const HomeTab = () =>(
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
      activeTintColor:'white',
      style: {
          backgroundColor:'#51339e'
      }
      }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Icon name="ios-home" size={25} color='white'/>}}/>
      <Tab.Screen name="Search" component={Search} options={{tabBarIcon:()=><Icon name="ios-search" size={25} color='white'/>}}/>
      <Tab.Screen name="Profile" children={() => <Profile onClick={toggleSignIn}/>} options={{tabBarIcon:()=><Icon name="ios-person" size={25} color='white'/>}}/>
    </Tab.Navigator>
  )
  return(
    <NavigationContainer>
      <Stack.Navigator >
        {!signedIn && <Stack.Screen 
          name="Auth" 
          children={() => <AuthTab onClick={toggleSignIn}/>} 
          options={{headerShown:false}}/>}
        {signedIn && 
          <>
            <Stack.Screen 
              name="Main" 
              children={MainDrawer} 
              options={({ navigation })=>({
                headerLeft: () => <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Icon name="ios-menu" size={45} color='white' /></TouchableOpacity>,
                headerRight: ()=><Image />,
                title: 'MyMoviePOC',
                headerStyle: {
                  backgroundColor: '#a31f71',
                },
                headerTitleStyle: {
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize:30
                }
              })}/>
            <Stack.Screen 
              name="MovieProfile" 
              component={MovieProfile}
              options={{
                headerStyle:{
                  backgroundColor:'#a31f71'
                },
                headerTitleStyle: {
                  color: 'white',
                  fontSize:30
                }
              }}/>
            <Stack.Screen
              name="MovieList"
              component={List}
              options={{
                headerStyle:{
                  backgroundColor:'#a31f71'
                }
              }}/>
          </>}
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  loginView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})