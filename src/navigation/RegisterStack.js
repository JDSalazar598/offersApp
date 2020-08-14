import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default function RegisterStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: null,
      }}>
      <Stack.Screen
        name="register"
        component={Register}
        screenOptions={{
            headerShown: false,
            header: null,
          }}
      />
    </Stack.Navigator>
  );
}
