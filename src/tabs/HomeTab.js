import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();


export default HomeTab = () =>{
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor:'white',
      style: {
          backgroundColor:'#51339e'
      }
    }}>
    <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Icon name="ios-home" size={25}/>}}/>
    <Tab.Screen name="Search" component={Search} options={{tabBarIcon:()=><Icon name="ios-search" size={25}/>}}/>
    <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=><Icon name="ios-person" size={25}/>}}/>
  </Tab.Navigator>
}