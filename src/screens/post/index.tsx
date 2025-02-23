import { View, Text, TextInput, Alert } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE, db } from '../../../FirebaseConfig'
import { addDoc, collection, } from 'firebase/firestore'
import { themes } from '../../global/themes'
import { useUser } from '../../global/contexts/UserContext';
import { serverTimestamp } from "firebase/firestore";


  


  export default function Post() {
        const auth = FIREBASE_AUTH;
        const db = FIREBASE_FIRESTORE;
        const { userData } = useUser();
        const [post, setPost] = useState(String);

        const submitPost = async () => {

      
          try {
            const docRef = await addDoc(collection(db, "posts"), {
              userId: userData,
              posts: post,
              postTime: serverTimestamp(),
              //valeu chat gpt ^
              likes: null,
              comments: null,
            });
            console.log("Document written with ID: ", docRef.id);
            Alert.alert('Post Publicado!');
            setPost('');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
        }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Parte dos Posts</Text>
      {/* <Input  onChangeText={(content) => setPost(content)}/> */}
      <Input value={post} onChangeText={setPost} />
      <Button text='Postar' onPress={submitPost}/>
    </View>
  )
}
