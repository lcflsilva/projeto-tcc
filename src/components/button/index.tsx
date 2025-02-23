import React from "react";

import {ActivityIndicator, Text, Touchable, TouchableHighlightProperties, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { themes } from "../../global/themes";

type Props = TouchableHighlightProperties &{
    text:string,
    loading?:boolean
    color?:string
}

export function Button({...rest}:Props){
    return (
        <TouchableOpacity 
        style={[styles.button, {backgroundColor:rest.color}]}
        {...rest}
        activeOpacity={0.6}
        >
            {rest.loading?<ActivityIndicator color={themes.colors.secondary}/>:<Text style={styles.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}