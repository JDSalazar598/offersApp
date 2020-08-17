import React, { useMemo, useState } from "react";
import { StatusBar, StyleSheet } from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
  DefaultTheme,
  Appbar, Text
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';
import PreferencesContext from './src/context/PreferencesContext';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function App() {
  const [nameBar, setNameBar] = useState("Home")
  const [tabbar, setTabbar] = useState(true);


  const toggleTabBar = () => {
    setTabbar(tabBar === true ? false : true);
  };

  const preference = useMemo(
    () => ({
      toggleTabBar,
      tabBar,
    }),
    [tabBar],
  );

  return (
    <PreferencesContext.Provider value={preference}  style={{ backgroundColor: "#dee2e6" }}>
      <PaperProvider>
        <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
        <NavigationContainer>                       
             <Navigation nameBar={nameBar} Tabbar={Tabbar} setTabbar={setTabbar} setNameBar={setNameBar} />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

