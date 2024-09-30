import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const AppStack = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerTitle: 'Meu Carrinho'
                }}
            />
        </AppStack.Navigator>
    )
}