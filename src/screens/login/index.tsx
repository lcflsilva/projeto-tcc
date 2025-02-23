import { View, Text, Image, Alert, Touchable, TouchableOpacity, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import Logo from '../../assets/logo.png'
import Fundo from '../../assets/fundoLogin.png'
import { Input } from '../../components/input'
import {AntDesign, FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { themes } from '../../global/themes'
import { Button } from '../../components/button'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from '../../../FirebaseConfig'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { Modalize } from 'react-native-modalize'
import { doc, setDoc } from 'firebase/firestore'

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const db = FIREBASE_FIRESTORE;

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
        }catch(error){
            alert('Email ou senha incorretos!')
        }finally{
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            alert('Usuário criado com sucesso!')
            const docRef = doc(db, 'users', response.user.uid);
            await setDoc(docRef, {
                username:username,
                email: email,
            });
        }catch(error){
            console.log(error)
            alert('Erro')
        }finally{
            setLoading(false)
        }
    }

    const resetPassword = async () => {
        try {
            const response = await sendPasswordResetEmail(auth, email);
            alert('E-mail enviado com sucesso!')
        }catch(error){
            alert('Insira um email válido!')
        }finally{

        }
    }

  return (
        <ImageBackground source={Fundo} style={styles.container}>

            <View style={styles.boxTop}>
                <Image
                    source={Logo}
                    style={styles.logo}
                    resizeMode='contain'
                />

                <Text style={styles.textTop}>Bandástico</Text>

                <Text style={[styles.textTop, {fontSize:17, fontWeight:400}]}>As informações da sua banda {"\n"} em um só lugar!</Text>

            </View>

            <View style={styles.boxMiddle}>

                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL:"
                    titleColor={themes.colors.secondary}
                    backgroundColor={themes.colors.lightPurple}
                    IconRight={MaterialIcons}
                    IconRightName="email"
                    autoCapitalize='none'
                />

                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA:"
                    titleColor={themes.colors.secondary}
                    backgroundColor={themes.colors.lightPurple}
                    IconRight={Octicons}
                    IconRightName={showPassword?"eye-closed":"eye"}
                    onIconRightPress={()=>setShowPassword(!showPassword)}
                    secureTextEntry={showPassword}
                    multiline={false}
                    autoCapitalize='none'
                />

            </View>

            <View style={styles.boxBottom}>

                <Button
                    text={"Entrar"}
                    loading={loading}
                    onPress={signIn}
                    color='#402B5E'
                    />

                <TouchableOpacity onPress={resetPassword}>
                    <Text style={styles.textBottom}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

            </View>

            {/* <TouchableOpacity onPress={()=>navigation.navigate('Signup')}> */}
            <TouchableOpacity onPress={onOpen}>
                <Text style={[styles.textBottom, {color:themes.colors.lightPurple, marginBottom:10}]}>Não tem conta? <Text style={{color:themes.colors.primary}}>Crie agora!</Text></Text>
            </TouchableOpacity>






            {/* {/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////} */}

            <Modalize 
                ref={modalizeRef}
                childrenStyle={{height:Dimensions.get('window').height/1.5}}
                adjustToContentHeight={true}
                modalStyle={{
                    backgroundColor:themes.colors.lightBlack
                }}
            >
                <View style={styles.containerModal}>

                    <View style={styles.boxHeaderModal}>
                        <Text style={styles.textTop}>Cadastro</Text>
                        <Text style={[styles.textTop, {fontSize:17, fontWeight:400}]}>Toda conta começa por aqui ;)</Text>
                    </View>

                    <View style={styles.boxContentModal}>

                    <Input
                            value={username}
                            onChangeText={setUsername}
                            title="NOME DE USUÁRIO:"
                            titleColor={themes.colors.secondary}
                            backgroundColor={themes.colors.lightPurple}
                            IconRight={AntDesign}
                            IconRightName="user"
                            autoCapitalize='none'
                        />

                        <Input
                            value={email}
                            onChangeText={setEmail}
                            title="ENDEREÇO DE E-MAIL:"
                            titleColor={themes.colors.secondary}
                            backgroundColor={themes.colors.lightPurple}
                            IconRight={MaterialIcons}
                            IconRightName="email"
                            autoCapitalize='none'
                        />

                        <Input
                            value={password}
                            onChangeText={setPassword}
                            title="SENHA:"
                            titleColor={themes.colors.secondary}
                            backgroundColor={themes.colors.lightPurple}
                            IconRight={Octicons}
                            IconRightName={showPassword?"eye-closed":"eye"}
                            onIconRightPress={()=>setShowPassword(!showPassword)}
                            secureTextEntry={showPassword}
                            multiline={false}
                            autoCapitalize='none'
                        />

                        <View style={styles.boxButtonModal}>
                            <Button
                                text={"Cadastrar"}
                                loading={loading}
                                onPress={signUp}
                                color='#402B5E'
                            />
                        </View>

                    </View>

                </View>

            </Modalize>

        </ImageBackground>    
  )
}