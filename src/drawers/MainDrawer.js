import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTab from '../tabs/HomeTab';
import Search from '../screens/main/search';
import Profile from '../screens/main/profile';
const Drawer = createDrawerNavigator();

export default MainDrawer = ({toggleSignIn}) =>(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={()=><HomeTab toggleSignIn={toggleSignIn} />}/>
      <Drawer.Screen name="Search" component={Search}/>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
)