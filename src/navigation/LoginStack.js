import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Login from "../screens/Login"

const Stack = createStackNavigator();

export default function ContactStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} options={{title: 'Iniciar Sesion'}} />
        </Stack.Navigator>
    )
}