import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreviewImage from '../screens/PreviewImage';
import OpenCamera from '../screens/OpenCamera';
import {View} from 'react-native';
const Stack = createStackNavigator();

export default function CameraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="openCamera"
        component={OpenCamera}
        screenOptions={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="previewImage"
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#e7305b'
         } 
        }}
        component={PreviewImage}
      />
    </Stack.Navigator>
  );
}
