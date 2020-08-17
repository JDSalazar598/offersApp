import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import ConfigurationStack from '../navigation/ConfigurationStack';
import {StyleSheet, Text} from 'react-native';
const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  //destructuring de props para obtener el estado del tab bar
  const {nameBar} = props;

  return (
    <>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: "#000",
            showLabel: false,
            keyboardHidesTabBar: true
          }}
          barStyle={styles.shadow}
          screenOptions={{
            tabBarVisible: true
          }}
          >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({focused, color}) => {
                let iconname;
                iconname = focused ? 'home' : 'home-outline';
                return (
                  <MaterialCommunityIcons
                    name={iconname}
                    color={color}
                    size={26}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Movie"
            component={Movie}
            options={{
              tabBarIcon: ({focused, color}) => {
                let iconname;
                iconname = focused ? 'store' : 'store-outline';
                return (
                  <MaterialCommunityIcons
                    name={iconname}
                    color={color}
                    size={26}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Configuration"
            component={ConfigurationStack}
            nameBar={nameBar}
            options={{
              tabBarIcon: ({focused, color}) => {
                let iconname;
                iconname = focused
                  ? 'account-circle'
                  : 'account-circle-outline';
                return (
                  <MaterialCommunityIcons
                    name={iconname}
                    color={color}
                    size={26}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
});
