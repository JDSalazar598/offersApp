import React from "react";
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Configuration from "../screens/Configuration"
import LoginStack from "../navigation/LoginStack"

const Stack = createStackNavigator();

export default function ContactStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="configuration"  component={Configuration} options={{title: 'Configuracion de cuenta', style: styles.bar}} />
            <Stack.Screen  name="login" component={LoginStack} options={{title: 'Iniciar Sesion'}} backgroundColor="#1976d2" />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: "#1976d2"
    }
})