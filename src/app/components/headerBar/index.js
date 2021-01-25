import React from 'react'
import { View , Alert, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';

//import styles
const styles = require('./styles').styles;
const colors = require('../../styles').colors;
const fontStyles = require('../../styles').fontStyles;
const themeClasses = require('../../styles').themeClasses;

export default class HeaderBar extends React.Component{
    constructor(){
        super()
    }

    async logOut(){
       
    }

    render(){
        const { isBack } = this.props;
        return(
            <View style={styles.container}>  
                {
                    isBack ? 
                        <TouchableOpacity
                            onPress={()=>{
                                Actions.pop()
                            }}
                        >

                            <Icon 
                                type={"Entypo"} 
                                name="chevron-thin-left" 
                                style={[styles.icon ]} 
                            />
                        </TouchableOpacity>
                    :
                        null
                }
                <View style={isBack && styles.paddingLeft}>
                    <Text 
                        style={[fontStyles.title, { color: colors.white }]} 
                    >
                            LOGO
                    </Text>
                </View>
            </View>
        )
    }
}