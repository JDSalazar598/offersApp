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
import icons from 'react-native-vector-icons/MaterialIcons';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function App() {
  const [nameBar, setNameBar] = useState("Home")
  const [Tabbar, setTabbar] = useState(true);


  return (
    <PreferencesContext.Provider  style={{ backgroundColor: "#dee2e6" }}>
      <PaperProvider>
        <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
        <NavigationContainer>                       
             <Navigation nameBar={nameBar} Tabbar={Tabbar} setTabbar={setTabbar} setNameBar={setNameBar} />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

