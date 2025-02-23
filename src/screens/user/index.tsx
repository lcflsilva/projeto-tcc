import { View, Text, TouchableOpacity, Image,  } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {AntDesign, FontAwesome, FontAwesome5} from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import Logo from '../../assets/logo.png'
import { useUser } from '../../global/contexts/UserContext';
import Placeholder from '../../assets/userimage-placeholder.png'
// import Nirvana from '../../assets/nirvana.png'
// import DarkThrone from '../../assets/darkthone.png'
// import Taylor from '../../assets/taylor.png'
// import Youtube from '../../assets/ytmusic.png'
// import Spotfiy from '../../assets/spotify.png'
import {useNavigation, NavigationProp} from '@react-navigation/native'


export default function User() {

  const { userData } = useUser();

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>

      <View style={styles.boxUser}>

        <TouchableOpacity onPress={() => navigation.navigate("Config")}>
          <FontAwesome name='gear' size={35} color={themes.colors.secondary} style={{textAlign:'right'}}/>
        </TouchableOpacity>

        <Text style={styles.textTitle}>Seu Perfil :)</Text>

        <View style={styles.boxTop}>
          <Image source={Placeholder} style={styles.userImage}/>

          <Text style={styles.textUsername}>{userData?.username}</Text>

        </View>

        {/* <View style={styles.boxMiddle}>
          <Text style={styles.subTitle}>{"\n"}Descrição</Text>
          <Text style={styles.descriptionText}>“MAIOR APRECIADOR DE MÚSICA DA HISTÓRIA HAHAHAHAHA”{"\n"}{"\n"}</Text>

          <Text style={styles.subTitle}>Músicas Favoritas{"\n"}{"\n"}</Text>

          <View style={styles.boxMusics}>
            <View style={styles.boxItem}>
              <Image source={DarkThrone} style={styles.musicCover}/>
              <Text style={[styles.subTitle, {fontSize:10}]}>A Blaze in the Northeen Sky</Text>
              <View style={styles.boxIcons}>
                <TouchableOpacity>
                  <Image source={Youtube} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Spotfiy} style={styles.icon}/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.boxItem}>
              <Image source={Taylor} style={styles.musicCover}/>
              <Text style={styles.subTitle}>1989</Text>
              <View style={styles.boxIcons}>
                <TouchableOpacity>
                  <Image source={Youtube} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Spotfiy} style={styles.icon}/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.boxItem}>
              <Image source={Nirvana} style={styles.musicCover}/>
              <Text style={styles.subTitle}>Nevermind</Text>
              <View style={styles.boxIcons}>
                <TouchableOpacity>
                  <Image source={Youtube} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Spotfiy} style={styles.icon}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View> */}

      </View>

    </View>
  )
}