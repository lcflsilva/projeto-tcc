import { Dimensions, StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
},
boxUser:{
    width:'93%',
    height:'90%',
    backgroundColor:'#302E2E',
    borderRadius:30,
    marginTop:13,
    padding:10
},

boxTop:{
  alignItems:'center',
  height:Dimensions.get('window').height/5,
  padding:35
},
perfilTop:{
  flexDirection: 'row', // Alinha os itens horizontalmente
  alignItems: 'center', // Centraliza verticalmente
  gap: 25, // Espaço entre o ícone e o texto
},
userImage:{
  width:50,
  height:50,
},
logo:{
  width:90,
  height:90,
},
perfil:{
  marginLeft:20,
},
informacoes:{
  marginLeft:20,
},
  title: {
    fontSize:32,
        fontWeight:'bold',
        color:themes.colors.secondary,
        textAlign:'center',
  },
  subtitle: {
    fontSize: 13,
    color: themes.colors.secondary,
    textAlign: 'center',
  },
  boxMid: {
    alignItems: 'flex-start',
    textAlign: 'left',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: themes.colors.secondary,
    marginBottom: 10,
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'light',
    color: themes.colors.secondary,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: themes.colors.primary,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  boxBottom: {
    alignItems: 'center',
  },
  exitText: {
    fontSize: 16,
    color: themes.colors.red,
    textDecorationLine: 'underline',
  },
});
