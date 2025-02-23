import { Dimensions, StyleSheet } from "react-native"
import { themes } from "../../global/themes"

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:themes.colors.backBlack
    },
    boxTop:{
        marginTop:20,
        width:'100%',
        height:Dimensions.get('window').height/3,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:97,
        height:97,
    },
    textTop:{
        color:themes.colors.secondary,
        fontSize:32,
        fontWeight:'700',
        marginTop:10,
        textAlign:'center'
    },
    boxMiddle:{
        width:'100%',
        height:Dimensions.get('window').height/3.6,
        paddingHorizontal:20,
    },
    boxBottom:{
        width:'100%',
        height:Dimensions.get('window').height/3,
        alignItems:'center',
    },
    textBottom:{
        color:themes.colors.lightPurple,
        fontSize:16,
        fontWeight:'bold',
        marginTop:10,
    },

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    containerModal:{
        width:'100%',
        marginTop:10
    },
    boxHeaderModal:{
        
    },
    boxContentModal:{
        paddingHorizontal:20
    },
    boxButtonModal:{
        flex:1,
        marginTop:50,
        alignItems:'center'
    }



})
