import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    card:{
        backgroundColor: '#f8f8f8',
        width: 350,
        marginBottom: 20,
        borderRadius: 10,
    },
    userinfo:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15,
    },
    username:{
      fontSize: 14,
      fontWeight: 'bold',
      
    },
    userinfotext:{
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10,
    },
    posttime:{
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#666',
    },
    posttext:{
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        paddingLeft:15,
        paddingRight:15
    },
    interactionwrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },
    interaction:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 2
    },
    interactiontext:{
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        color:'#333',
        marginTop:5,
        marginLeft:5
    },
    divider:{
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        width:'92%',
        alignSelf: 'center',
        marginTop: 15
    }
})