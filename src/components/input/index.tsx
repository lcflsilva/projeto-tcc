import React, { forwardRef, Fragment, LegacyRef } from "react";

import { StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View } from 'react-native';

import { styles } from "./styles";

import { themes } from "../../global/themes";

import {AntDesign, FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>> |
                     React.ComponentType<React.ComponentProps<typeof AntDesign>>;

type Props = TextInputProps & { 
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    titleColor?:string,
    backgroundColor?:string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
    height?: number,
    labelStyle?: StyleProp<TextStyle>
}



export const Input = forwardRef((Props:Props, ref:LegacyRef<TextInput>|null)=>{

    const {IconLeft, IconRight, IconLeftName, IconRightName, title,titleColor,backgroundColor, onIconLeftPress, onIconRightPress,height,labelStyle,...rest} = Props

    const calculateSizeWidth = () =>{
        if(IconLeft && IconRight){
            return '80%'
        }else if(IconLeft || IconRight){
            return '90%'
        }else{
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () => {
        if(IconLeft && IconRight){
            return 3
        }else if(IconLeft || IconRight){
            return 5
        }else{
            return 20
        }
    }

    return (
        <Fragment>

            {title &&(
                <Text style={[styles.titleInput, labelStyle, {color:titleColor}]}>{title}</Text>
            )}

            <View style={[styles.boxInput, {paddingLeft:calculateSizePaddingLeft(), height: height||40, backgroundColor:backgroundColor}]}>

                {IconLeft && IconLeftName &&(
                    <TouchableOpacity onPress={onIconLeftPress}>
                        <IconLeft name={IconLeftName as any} size={20} color={themes.colors.primary} style={styles.icon}/>
                    </TouchableOpacity>
                )}

                <TextInput 
                    style={[styles.input, { width: calculateSizeWidth(),height:'100%'}]}
                    ref={ref}
                    multiline
                    {...rest}
                />

                {IconRight && IconRightName &&(
                    <TouchableOpacity onPress={onIconRightPress}>
                        <IconRight name={IconRightName as any} size={20} color={themes.colors.primary} style={styles.icon}/>
                    </TouchableOpacity>
                )}

            </View>

        </Fragment>
    )
})
