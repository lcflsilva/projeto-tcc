import { View, Text, TouchableOpacity, FlatList, Alert, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button } from '../../components/button'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE, db } from '../../../FirebaseConfig'
import { themes } from '../../global/themes'
import { styles } from './styles'
import { PostCard } from '../../components/PostCard'
import { addDoc, getDoc, collection, orderBy, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { useUser } from '../../global/contexts/UserContext'
import Logo from '../../assets/logo.png'
import {FontAwesome, Feather, Ionicons} from '@expo/vector-icons';


export default function Home() {
const [Posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("postTime", "desc")); // Ordena do mais recente para o mais antigo

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let array: Post[] = [];

      querySnapshot.forEach((doc) => {
        const { userId, username, posts, postTime, likes, comments } = doc.data();

        array.push({
          id: doc.id,
          userName: userId.username,
          postTime: postTime?.toDate().toLocaleString(),
          posts,
          liked: false,
          likes,
          comments
        });
      });

      setPosts(array);
      setLoading(false);
    });

    return () => unsubscribe(); // Remove o listener ao desmontar o componente
  }, []);

  // const deletePost = (postId) => {
  //   console.log('Current Post Id: ', postId);


  // }

  // const deletePost = async (postId) => {
  //   try {
  //     const docRef = doc(db, "posts", postId); // Referência ao documento
  //     const documentSnapshot = await getDoc(docRef);
  
  //     if (documentSnapshot.exists()) {
  //       await deleteFirestoreData(postId);
  //     } else {
  //       console.log("Documento não encontrado!");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao verificar existência do documento:", error);
  //   }
  // };
  
  // const deleteFirestoreData = async (postId) => {
  //   try {
  //     const docRef = doc(db, "posts", postId);
  //     await deleteDoc(docRef);
  //     Alert.alert("Post Deletado!");


  //   } catch (error) {
  //     console.error("Erro ao apagar post:", error);
  //   }
  // };

  const deletePost = (postId: string): void => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja apagar este post?",
      [
        {
          text: "Cancelar",
          style: "cancel", // Apenas fecha o alerta
        },
        {
          text: "Sim",
          onPress: () => confirmDelete(postId), // Chama a função de apagar
        },
      ]
    );
  };
  
  interface Post {
    id: string;
    userName: string;
    postTime: string;
    posts: string;
    liked: boolean;
    likes: number;
    comments: number;
  }

  const confirmDelete = async (postId: string): Promise<void> => {
    try {
      const docRef = doc(db, "posts", postId);
      const documentSnapshot = await getDoc(docRef);

      if (documentSnapshot.exists()) {
        await deleteDoc(docRef);
        Alert.alert("Post Deletado!");
      } else {
        Alert.alert("Erro", "O post não foi encontrado.");
      }
    } catch (error) {
      console.error("Erro ao apagar post:", error);
      Alert.alert("Erro", "Não foi possível apagar o post.");
    }
  };


  return (
    <View style={styles.container}>

      <View style={styles.boxTop}>

        <View style={styles.boxHeader}>

          <View style={styles.boxLogo}>
            <Image source={Logo} style={styles.logo}/>

            <Text style={styles.textHeader}> Bandástico®</Text>
          </View>

          <View style={styles.boxIcons}>

            <TouchableOpacity>
              <FontAwesome
                name='group'
                color={themes.colors.secondary}
                size={32}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather
                name='message-circle'
                color={themes.colors.secondary}
                size={32}
              />
            </TouchableOpacity>

          </View>

        </View>

        
        <View style={styles.boxTags}>
          <Ionicons
            name='compass-outline'
            size={38}
            color={themes.colors.secondary}
          />

        </View>

      </View>

      <FlatList data={Posts} 
      renderItem={({item}) => <PostCard item={item} onDelete={deletePost}/>} 
      keyExtractor={item=>item.id}
      showsVerticalScrollIndicator={false}
      />
      
    </View>
  )
}