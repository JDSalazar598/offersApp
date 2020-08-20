import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Configuration from '../screens/Configuration';
import LoginStack from '../navigation/LoginStack';
import OpenMap from '../screens/OpenMap';

const Stack = createStackNavigator();

export default function ConfigurationStack({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Stack.Navigator initialRouteName="configuration">
      <Stack.Screen
        name="configuration"
        component={Configuration}
        options={{title: 'Configuracion de cuenta', style: styles.bar}}
      />
      <Stack.Screen
        name="login"
        component={LoginStack}
        options={{title: '', headerShown: false, tabBarVisible: false}}
        backgroundColor="#1976d2"
      />
      <Stack.Screen
        name="openMap"
        component={OpenMap}
        options={{title: '', headerShown: false, tabBarVisible: false}}
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
