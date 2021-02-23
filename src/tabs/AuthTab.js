import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default AuthTab = ({toggleSignIn}) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:'white',
                style: {
                    backgroundColor:'#51339e'
                }
            }}>
            <Tab.Screen name="Login" children={() => <Login toggleSignIn={toggleSignIn}/>} options={{ tabBarIcon: () => <Icon name="arrow-forward-circle-outline" size={25} color='white'/>}}/>
            <Tab.Screen name="SignUp" children={() => <SignUp toggleSignIn={toggleSignIn}/>} options={{ tabBarIcon: () => <Icon name="add-circle" size={25} color='white'/>}}/>
        </Tab.Navigator>
    )
}