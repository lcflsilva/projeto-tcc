import { Dimensions, StyleSheet } from "react-native"
import { themes } from "../../global/themes"

export const styles = StyleSheet.create({
    titleInput:{
        marginLeft:5,
        marginTop:20,
        fontWeight:'bold'
    },
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:0.1,
        borderRadius:40,
        borderColor:themes.colors.third,
        //backgroundColor:themes.colors.secondary,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingRight:10
    },
    icon:{
        width:"100%"
    },
    input:{
        height:'100%',
        width:'100%',
        borderRadius:40,
    }
})
