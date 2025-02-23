import { View, Image, Text } from 'react-native';
import React from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { themes } from '../../global/themes';
import { styles } from './styles';
import Placeholder from '../../assets/userimage-placeholder.png'
import Logo from '../../assets/logo.png'

export default function Config() {
  return (
    <View style={styles.container}>
      
    <View style={styles.boxUser}>
      {/* Seção boxTop */}
      <View style={styles.boxTop}>
        <Text style={styles.title}>CONFIGURAÇÕES</Text>
        <Text style={styles.subtitle}>Sempre tem como deixar o app melhor, não é? ;){"\n"}</Text>
      </View>
      
      {/* Seção boxMid */}
      <View style={styles.boxMid}>

      <View style={styles.perfil}>
      <View style={styles.perfilTop}>
        <Image source={Placeholder} style={styles.userImage}/>
        <Text style={styles.sectionTitle}>SEU PERFIL{"\n"}</Text>
        </View>
        <Text
          onPress={() => console.log('Editar perfil')}
          style={styles.buttonText}
          accessibilityRole="button"
          accessibilityLabel="Editar seu perfil"
        >
          {"\n"}Editar seu perfil >{"\n"}
        </Text>
        
        <Text
          onPress={() => console.log('Mudar senha')}
          style={styles.buttonText}
          accessibilityRole="button"
          accessibilityLabel="Mudar senha"
        >
          Mudar senha >{"\n"}
        </Text>

        <Text
          onPress={() => FIREBASE_AUTH.signOut()}
          style={styles.exitText}
          accessibilityRole="button"
          accessibilityLabel="Sair"
        >
          Sair  >{"\n"}
        </Text>
      </View>

      <View style={styles.informacoes}>
        <Text style={styles.sectionTitle}>{"\n"}INFORMAÇÕES{"\n"}</Text>

        <Text
          onPress={() => console.log('Sobre nós')}
          style={styles.buttonText}
          accessibilityRole="button"
          accessibilityLabel="Sobre nós"
        >
          Sobre nós >{"\n"}
        </Text>

        <Text
          onPress={() => console.log('Informações legais')}
          style={styles.buttonText}
          accessibilityRole="button"
          accessibilityLabel="Informações legais"
        >
          Informações legais >{"\n"}
        </Text>
        </View>
      </View>
      
      {/* Seção boxBottom */}
      <View style={styles.boxBottom}>
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.bottomText}>{"\n"}Bandástico® 2025</Text>
      </View>
    </View>
    </View>
  );
}
