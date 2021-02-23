import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTab from '../tabs/HomeTab';
import Search from '../screens/main/Search';
import Profile from '../screens/main/Profile';
const Drawer = createDrawerNavigator();

export default MainDrawer = ({onClick}) =>(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={()=><HomeTab onClick={onClick} />}/>
      <Drawer.Screen name="Search" component={Search}/>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
)