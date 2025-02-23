import { Dimensions, StyleSheet } from "react-native";
import {themes} from "../../global/themes"

export const styles = StyleSheet.create({
    button:{
        width:225,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themes.colors.primary,
        borderRadius:40,
        shadowColor: "#000", //Código pego em um gerador de box shadow online
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textButton:{
        fontSize:16,
        color:themes.colors.secondary,
        fontWeight:'bold',

    },
});