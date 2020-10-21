/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
  Platform,
  Linking,


} from 'react-native';
import { Provider, useSelector } from "react-redux";
import store from "./Redux/store/index";
import SplashScreen from 'react-native-splash-screen'
import { AppView, AppText } from './components/atoms';
import Navigation from './Router';
import Tabcuemusic from "./scenes/Tabcuemusic/index"
import {Loader} from "./components/Loader"
const App = () => {

  useEffect(() => {
    SplashScreen.hide()

  }, [])

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation/>
        <Loader />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
