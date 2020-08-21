import React, {useMemo, useState} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
  DefaultTheme,
  Appbar,
  Text,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
import HomeTabs from './src/navigation/HomeTabs';
import PreferencesContext from './src/context/PreferencesContext';
import {createStackNavigator} from '@react-navigation/stack';
import CameraStack from './src/navigation/CameraStack';
import LoginStack from './src/navigation/LoginStack';
import OpenMap from './src/screens/OpenMap';
const Stack = createStackNavigator();
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function App() {
  const [nameBar, setNameBar] = useState('Home');
  LogBox.ignoreLogs(['Warning: Cannot update a component']);
  return (
    <PreferencesContext.Provider style={{backgroundColor: '#dee2e6'}}>
      <PaperProvider>
        <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeTabs"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen
              name="cameraStack"
              screenOptions={{headerShown: true}}
              component={CameraStack}
            />
            <Stack.Screen
              name="login"
              component={LoginStack}
              options={{title: '', headerShown: false, tabBarVisible: false}}
              backgroundColor="#1976d2"
            />
            <Stack.Screen
              name="OpenMap"
              component={OpenMap}
              options={{title: '', headerShown: true, tabBarVisible: false}}
              backgroundColor="#1976d2"
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
