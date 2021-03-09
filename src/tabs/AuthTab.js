import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default AuthTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        style: styles.tabBG,
      }}>
      <Tab.Screen
        name="Login"
        children={() => <Login />}
        options={{
          tabBarIcon: () => (
            <Icon name="arrow-forward-circle-outline" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        children={() => <SignUp />}
        options={{
          tabBarIcon: () => <Icon name="add-circle" size={25} color="white" />,
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
