import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent:'center',
        alignItems:'center'
    },
    boxTop:{
        width:'100%',
        height:Dimensions.get('window').height/7,
        alignItems:'center',
        //justifyContent:'center',
        //backgroundColor:'red',
        marginBottom: 30,
    },
    boxHeader:{
        width:'100%',
        //backgroundColor:'green',
        height:'50%',
        marginTop: 23,
        flexDirection:"row",
        alignItems:"center",
    },
    boxTags:{
        width:'100%',
        //backgroundColor:'blue',
        height:'50%',
        justifyContent:'center',
        paddingLeft:10,
    },
    logo:{
        width:40,
        height:40,
        marginLeft:10,
    },
    textHeader:{
        fontSize: 18,
        fontWeight: "bold",
        color:themes.colors.secondary,
    },
    boxIcons:{
        flexDirection:"row",
        //backgroundColor:'yellow',
        width:'50%',
        height:'100%',
        justifyContent:'flex-end',
        alignItems:"center",
        gap:18,
        paddingRight:10, 
    },
    boxLogo:{
        width:'50%',
        //backgroundColor:'violet',
        height:'100%',
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10,
    }
})