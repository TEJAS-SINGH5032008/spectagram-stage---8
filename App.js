import * as React from 'react';
import { createSwitchNaviagtor,createAppContainer} from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

import LoginScreen from "./screen/LoginScreen";
import LoadingScreen from "./screen/LoadingScreen";
import PostScreen from "./screen/PostScreen";

import *as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig) ;
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen : LoginScreen ,
  LoadingScreen : LoadingScreen ,
  PostScreen : PostScreen
})
const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <AppNavigator>
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    </AppNavigator>
  );
}