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
import LoginStack from './src/navigation/LoginStack';

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
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeTabs}  />
            <Stack.Screen name="LoginStack" component={LoginStack}  />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
