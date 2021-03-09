import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/main/home';
import Search from '../screens/main/search';
import Profile from '../screens/main/profile';

const Tab = createBottomTabNavigator();

export default HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: 'white',
        style: styles.tabBG,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="ios-home" size={25} color="white" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Icon name="ios-search" size={25} color="white" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        children={() => <Profile />}
        options={{
          tabBarIcon: () => <Icon name="ios-person" size={25} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBG: {
    backgroundColor: '#51339e',
  },
});
