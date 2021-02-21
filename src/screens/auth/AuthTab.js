import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import SignUp from './SignUp';
import Icon from 'react-native-vector-icons/Ionicons';
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const Tab = createBottomTabNavigator();

export default AuthTab = ({onClick}) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:'white',
                style: {
                    backgroundColor:'#51339e'
                }
            }}>
            <Tab.Screen name="Login" children={() => <Login onClick={onClick}/>} options={{ tabBarIcon: () => <Icon name="arrow-forward-circle-outline" size={25} color='white'/>}}/>
            <Tab.Screen name="SignUp" children={() => <SignUp onClick={onClick}/>} options={{ tabBarIcon: () => <Icon name="add-circle" size={25} color='white'/>}}/>
        </Tab.Navigator>
    )
}