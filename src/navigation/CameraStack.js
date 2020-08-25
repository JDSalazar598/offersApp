import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreviewImage from '../screens/PreviewImage';
import OpenCamera from '../screens/OpenCamera';
import Gallery from '../screens/Gallery';
import {View} from 'react-native';
const Stack = createStackNavigator();

export default function CameraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="openCamera"
        component={OpenCamera}
      />
      <Stack.Screen
        name="previewImage"
        options={{
          title: '',
          headerTransparent: false,
          headerTintColor: '#000',
          headerStyle: {
            backgroundColor: '#fff'
         } 
        }}
        component={PreviewImage}
      />
      <Stack.Screen
        name="gallery"
        options={{
          title: ''
        }}
        component={Gallery}
      />
    </Stack.Navigator>
  );
}
