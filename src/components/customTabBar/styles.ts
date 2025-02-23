import { StyleSheet } from "react-native"
import { themes } from "../../global/themes"

export const styles = StyleSheet.create({
    tabArea:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-around',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabItemButton:{
        width:70,
        height:70,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        top:-30,
        zIndex:9999,
        backgroundColor:themes.colors.primary
    }
})