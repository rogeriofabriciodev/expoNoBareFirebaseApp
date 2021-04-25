import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import apiKeys from './config/keys';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Loading from './screens/LoadingScreen';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  if(!firebase.apps.length) {
    console.log('Conectado ao Firebase!');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ 'Loading' } component={ Loading } options={{ headerShow: false }} />
        <Stack.Screen name='Home' component={ WelcomeScreen } options={{ headerShow: false }} />
        <Stack.Screen name='SignUp' component={ SignUp } options={{ headerShow: false }} />
        <Stack.Screen name='SignIn' component={ SignIn } options={{ headerShow: false }} />
        <Stack.Screen name={ 'Dashboard' } component={ Dashboard } options={{ headerShow: false }} />
      </Stack.Navigator>
      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
