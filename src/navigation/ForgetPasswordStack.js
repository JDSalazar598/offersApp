import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ForgetPassword from '../screens/ForgetPassword';
import Login from '../screens/Login';
const Stack = createStackNavigator();

export default function ForgetPasswordStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: null,
      }}>
      <Stack.Screen
        name="forget"
        component={ForgetPassword}
        screenOptions={{
            headerShown: false,
            header: null,
          }}
      />      
      <Stack.Screen
        name="login"
        component={Login}
        screenOptions={{
            headerShown: false,
            header: null,
          }}
      />
    </Stack.Navigator>
  );
}
