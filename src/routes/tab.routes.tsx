import React from "react";
import {MaterialIcons} from "@expo/vector-icons"
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const {Screen, Navigator} = createBottomTabNavigator()

export function TabRoutes() {
    return(
        <Navigator
        screenOptions={
            {
                tabBarActiveTintColor:"red",
                tabBarInactiveTintColor:'gray',
                //headerShown:false,
            }
        }
        >
            <Screen name="screenA" component={ScreenA}
            options={
                {
                    tabBarLabel: "Home",
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="home" color={color} size={25} />
                                        )
                }
            }
            
            />
            <Screen name="screenB" component={ScreenB} 
           options={
            {
                tabBarLabel: "Novo",
                tabBarIcon: ({color}) => (
                    <MaterialIcons name="add" color={color} size={25} />
                                    )
            }
        }
        
            />
        </Navigator>
    )
}