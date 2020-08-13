import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import ConfigurationStack from '../navigation/ConfigurationStack';
import { StyleSheet } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      barStyle={styles.shadow}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: true,
          tabBarIcon: ({ focused, color }) => {
            let iconname;
            iconname = focused ? 'home' : 'home-outline'
            return <MaterialCommunityIcons name={iconname} color={color} size={26} />
          },
        }}
      />
      <Tab.Screen
        name="Movie"
        component={Movie}
        options={{
          tabBarLabel: true,
          tabBarIcon: ({ focused, color }) => {
            let iconname;
            iconname = focused ? 'store' : 'store-outline'
            return <MaterialCommunityIcons name={iconname} color={color} size={26} />
          },
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={ConfigurationStack}
        options={{
          tabBarLabel: true,
          tabBarIcon: ({ focused, color }) => {
            let iconname;
            iconname = focused ? 'account-circle' : 'account-circle-outline'
            return <MaterialCommunityIcons name={iconname} color={color} size={26} />
          },
        }}
      />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  shadow: {
    justifyContent: 'center',
    backgroundColor: "#fff",   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6
  }
});