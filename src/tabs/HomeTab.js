import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/main/Home';
import Search from '../screens/main/Search';
import Profile from '../screens/main/Profile';
const Tab = createBottomTabNavigator();

export default HomeTab = ({onClick}) => {
    return (
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
            <Tab.Screen name="Profile" children={()=><Profile onClick={onClick} />} options={{tabBarIcon:()=><Icon name="ios-person" size={25} color='white'/>}}/>
        </Tab.Navigator>
    )
}