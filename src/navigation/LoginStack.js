import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import RegisterStack from '../navigation/RegisterStack'
import ForgetPasswordStack from '../navigation/ForgetPasswordStack'

const Stack = createStackNavigator();


export default function LoginStack(props) 
{
  return (
    <Stack.Navigator
    initialRouteName="login">
      <Stack.Screen name="login"  component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="register"  component={RegisterStack}  options={{headerShown: false, header: null}}/>
      <Stack.Screen name="forget"  component={ForgetPasswordStack}  options={{headerShown: false, header: null}}/>
    </Stack.Navigator>
  );
}
