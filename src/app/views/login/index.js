import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Image,
    Alert,
    ScrollView
} from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

//import styles
const styles = require('./styles').styles;
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
        }
    }

    async login(){
        const { email, password } = this.state;
        if(email && password){
            if(email === "lariosarci@hotmail.com" && password === "prueba"){
                Actions.Home()
            }else{
                Alert.alert("Error.", "Correo o contraseña incorrectos.")
            }
        }else{
            Alert.alert("Error.", "Campos vacíos.")
        }
    }

    render(){
        return(
            <View style={styles.containerMain}>
                <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={colors.gradient} 
                    style={[themeClasses.container, themeClasses.paddingTop]}
                >
                    <ScrollView>
                        <View style={[styles.containerImage]}>
                            <Image 
                                source={require("../../../resources/images/logo.png")} 
                                resizeMode={"contain"} 
                                style={styles.imageSize} 
                            />
                        </View>
                        <View style={styles.container}>
                            <Text 
                                style={[fontStyles.h1Bold, { color: colors.white}]}
                            >
                                Iniciar sesión en
                                <Text 
                                    style={[fontStyles.h1Bold, styles.title]}
                                > 
                                    {"Rick & Morty"}
                                </Text>
                            </Text>
                            <Text style={[fontStyles.h2, styles.subTitle]}>Bienvenido </Text>
                        </View>
                        {/* Buttons */}
                        <View
                            style={styles.container}
                        >
                            <View
                                style={styles.containerInput}
                                removeTop
                            >
                                <TextInput 
                                    style={styles.input}
                                    placeholder={"Correo electrónico"}
                                    onChangeText={(email)=>{
                                        this.setState({email})
                                    }}
                                    textContentType={"emailAddress"}
                                    autoCapitalize={"none"}
                                />
                            </View>
                            <View
                                style={styles.containerInput}
                                removeTop
                            >
                                <TextInput 
                                    style={styles.input}
                                    placeholder={"Contraseña"}
                                    onChangeText={(password)=>{
                                        this.setState({password})
                                    }}
                                    secureTextEntry={true}
                                    textContentType={"password"}
                                />
                            </View>
                            
                            <TouchableOpacity
                                style={[styles.buttonsLogin ]}
                                onPress={()=>{
                                    this.login()
                                }}
                            >
                                <Text 
                                    style={[fontStyles.h3Bold, { marginLeft: moderateScale(10) }]}>
                                    Iniciar sesión
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <KeyboardSpacer/>
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}