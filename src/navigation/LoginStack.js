import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import RegisterStack from '../navigation/RegisterStack'
import ForgetPasswordStack from '../navigation/ForgetPasswordStack'

const Stack = createStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: null,
      }}>
      <Stack.Screen name="login"  component={Login} />
      <Stack.Screen name="register"  component={RegisterStack}  screenOptions={{headerShown: false, header: null}}/>
      <Stack.Screen name="forget"  component={ForgetPasswordStack}  screenOptions={{headerShown: false, header: null}}/>
    </Stack.Navigator>
  );
}
