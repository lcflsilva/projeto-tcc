import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../../components/button'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import { themes } from '../../global/themes'

export default function Shows() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Parte dos Shows</Text>
    </View>
  )
}