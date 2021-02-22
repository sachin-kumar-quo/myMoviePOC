import React,{useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import Login from './src/screens/auth/Login'
import SignUp from './src/screens/auth/SignUp'
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import MovieProfile from './src/screens/MovieProfile';
import List from './src/screens/List'
import Icon from 'react-native-vector-icons/Ionicons';
import AuthTab from './src/screens/auth/AuthTab';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default App = ({navigation}) => {
  const [signedIn, setSignedIn] = useState(false);

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
                headerLeft:()=><TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}><Icon name="ios-menu" size={45} color='white' /></TouchableOpacity>,
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