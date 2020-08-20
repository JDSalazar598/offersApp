import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Community from '../screens/Community';
import OpenCamera from '../screens/OpenCamera';
import OpenMap from '../screens/OpenMap';
import Navigation from './Navigation';

const Stack = createStackNavigator();

export default function CommunityStack({navigation, route}) {
    navigation.setOptions({tabBarVisible: false});
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }

  return (
    <Stack.Navigator initialRouteName="comunity">
      <Stack.Screen
        name="comunity"
        component={Community}
        options={{headerShown: false, tabBarVisible: false}}
      />
      <Stack.Screen
        name="openCamera"
        component={OpenCamera}
        options={{title: '', headerShown: true}}
        backgroundColor="#1976d2"
      />
      <Stack.Screen
        name="openMap"
        component={OpenMap}
        options={{title: '', headerShown: true}}
        backgroundColor="#1976d2"
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#1976d2',
  },
});
