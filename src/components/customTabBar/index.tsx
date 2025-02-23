import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { themes } from '../../global/themes';

export default ({state, navigation}:any) => {
  
  const go = (screenName: string) =>{
    navigation.navigate(screenName)
  }

  return(

    <View style={styles.tabArea}>

      <TouchableOpacity style={styles.tabItem} onPress={()=> go("Home")}>
        <Entypo
          name="home"    
          style={{opacity:state.index===0?1:0.45,color:themes.colors.lightPurple,fontSize:34}}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={()=> go("Shows")}>
        <MaterialCommunityIcons
          name="microphone-variant"
          style={{opacity:state.index===1?1:0.45,color:themes.colors.lightPurple,fontSize:34}}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={()=> go("Post")}>
        <Feather
          name="plus-circle"
          style={{color:themes.colors.primary,fontSize:38}}
        />
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.tabItemButton} onPress={()=> go("Post")}>
        <View style={{width:'100%', left:10, top:4}}>
          <Entypo
            name="plus"
            size={34}
            color={'#FFF'}
          />
        </View>

        <View style={{flexDirection:'row-reverse', width:'100%', right:10, bottom:10}}>
          <MaterialIcons
            name="edit"
            size={34}
            color={'#FFF'}        
          />
        </View>
      </TouchableOpacity>  */}

      <TouchableOpacity style={styles.tabItem} onPress={()=> go("Discover")}>
        <FontAwesome
          name="calendar"
          style={{opacity:state.index===2?1:0.45,color:themes.colors.lightPurple,fontSize:34}}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={()=> go("User")}>
        <FontAwesome
          name="user"
          style={{opacity:state.index===3?1:0.45,color:themes.colors.lightPurple,fontSize:34}}
        />
      </TouchableOpacity>

      </View>
  )
  }