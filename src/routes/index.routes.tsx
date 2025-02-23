import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login'
import BottomRoutes from './bottom.routes'
import { onAuthStateChanged, User } from 'firebase/auth'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from '../../FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useUser } from '../global/contexts/UserContext'
import { themes } from '../global/themes'

export default function Routes() {
  const Stack = createStackNavigator()
  const {user} = useUser();

  // const [user, setUser] = useState<User | null>(null);
  // const db = FIREBASE_FIRESTORE;

  // useEffect(() => {
  //   onAuthStateChanged(FIREBASE_AUTH, async (user) => {
  //     setUser(user);
  //   });
  // }, []);

  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#212121' }
      }}
    >
      {user?
        <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
        :
        <>
        <Stack.Screen name="Login" component={Login} />
        </>
      }
      
      
    </Stack.Navigator>
  )
}