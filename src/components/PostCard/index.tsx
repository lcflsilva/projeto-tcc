import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import item from '../../screens/shows'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE, db } from '../../../FirebaseConfig'
import { useUser } from '../../global/contexts/UserContext';
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

interface PostItem {
  liked: boolean;
  likes: number;
  comments: number;
  userName: string;
  postTime: string;
  posts: string;
  id: string;
}

export const PostCard = ({ item, onDelete }: { item: PostItem; onDelete: (id: string) => void }) => {

    const { userData } = useUser();

  var likeIcon = item.liked ? 'heart' : 'heart-outline';
  var likeIconColor = item.liked ? '#2e64e5' : '#333';

  if(item.likes == 1) {
    var likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like'
  }

  if(item.comments == 1) {
    var commentText = '1 Comentário';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comentários';
  } else {
    commentText = 'Comentar'
  }

    return (
        <View style={styles.card}>

        <View style={styles.userinfo}>

          <View style={styles.userinfotext}>

          <Text style={styles.username}>{item.userName}</Text>
          <Text style={styles.posttime}>{item.postTime}</Text>

          </View>
        </View>

          <Text style={styles.posttext}>{item.posts}</Text>


          <View style={styles.divider}/>

          <View style={styles.interactionwrapper}>

            <TouchableOpacity style={styles.interaction}>
              <Ionicons name={likeIcon} size={25} color ={likeIconColor}/>
              <Text style={styles.interactiontext}>{likeText}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.interaction}>
              <Ionicons name="chatbubble-outline" size={25} />
              <Text style={styles.interactiontext}>{commentText}</Text>
            </TouchableOpacity>

            {userData?.username == item.userName ?

            <TouchableOpacity style={styles.interaction} onPress={() => onDelete(item.id)}>
            <Ionicons name="trash-outline" size={25} />
            <Text style={styles.interactiontext}>Apagar</Text>
          </TouchableOpacity>

          : null}

            
          
          </View>

      </View>
    )
}

