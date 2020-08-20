import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Community from '../screens/Community';
import Favorites from '../screens/Favorites';
import ConfigurationStack from '../navigation/ConfigurationStack';
import {StyleSheet, Text} from 'react-native';
import {getMyStringValue} from '../api/Auth';
const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  //destructuring de props para obtener el estado del tab bar
  const sesion = getMyStringValue();


  console.log(sesion);

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
            name="community"
            component={Community}
            options={{
              tabBarIcon: ({focused, color}) => {
                let iconname;
                iconname = focused ? 'account-details' : 'account-details-outline';
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
          {sesion ? (
              <Tab.Screen
              name="favorites"
              component={Favorites}
              options={{
                tabBarIcon: ({focused, color}) => {
                  let iconname;
                  iconname = focused ? 'star' : 'star-outline';
                  return (
                    <MaterialCommunityIcons
                      name={iconname}
                      color={color}
                      size={26}
                    />
                  );
                },
              }}
            />): ('')
          }
        
          <Tab.Screen
            name="Configuration"
            component={ConfigurationStack}
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
