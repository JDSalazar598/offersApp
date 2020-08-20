import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Community from '../navigation/ComunityStack';
import Favorites from '../screens/Favorites';
import ConfigurationStack from '../navigation/ConfigurationStack';
import {StyleSheet, Text} from 'react-native'
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    
    <>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#000',
            showLabel: false,
          }}
          barStyle={styles.shadow}
          >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
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
              title: '',
              tabBarIcon: ({focused, color}) => {
                let iconname;
                iconname = focused
                  ? 'account-details'
                  : 'account-details-outline';
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
            name="Favoritos"
            component={Favorites}
            options={{
              title: null,
              tabBarBadge: 3,
              tabBarIcon: ({focused, color}) => {
                let iconname;
                title: '',
                iconname = focused ? 'fire' : 'fire';
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
            name="ConfigurationStack"
            component={ConfigurationStack}            
            options={{
              title: '',
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
