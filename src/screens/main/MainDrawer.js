import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();


export default MainDrawer = () =>(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={HomeTab}/>
      <Drawer.Screen name="Search" component={Search}/>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
)