import React from "react";
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {MaterialIcons} from '@expo/vector-icons'
const {Screen, Navigator} = createDrawerNavigator()

export function DrawerRoutes() {
    return(
        <Navigator>
            <Screen name="screenA" component={ScreenA}
            options={
                {
                    drawerLabel: "Home",
                    drawerIcon: () => (
                        <MaterialIcons name="home" size={22} />
                    )
                }
            }
            
            />
            <Screen name="screenB" component={ScreenB} options={
                {
                    drawerLabel: "Sair",
                    drawerIcon: () => (
                        <MaterialIcons name="logout" size={22} />
                    )
                }
            }
           
            />
        </Navigator>
    )
}