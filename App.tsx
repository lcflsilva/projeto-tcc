import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';

import Routes from './src/routes/index.routes';

import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { UserProvider } from './src/global/contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </UserProvider>
  );
}