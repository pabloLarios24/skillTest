import React from 'react'
import {View,Text,TouchableOpacity, Image} from 'react-native'
import {moderateScale} from 'react-native-size-matters'
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

//import componentes
import Shadow from '../dynamicShadow'

//import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const styles = require('./styles').styles;

const CardCharacter = ({ name, kind, status, type, gender, img, item,animationLeft }) =>{
    return(
        <TouchableOpacity 
            onPress={()=>{
                Actions.DetailsCharacter({
                    item: item
                })
            }}
        >

            <Animatable.View 
                animation={animationLeft ? 'fadeInLeft' : 'fadeInRight'}
                style={{margin:moderateScale(10)}}
                
            >
                <Shadow 
                    removeTop 
                    style={{
                        ...styles.container
                    }}> 
                        {/* Image */}
                        <View 
                            style={styles.containerImage}
                        >
                            <Image
                                source={{uri: img}}
                                style={{flex:1}}
                            />
                        </View>
                        {/* Info */}
                        <View 
                            style={styles.containerText}
                        >
                            {/* kind */}
                            <View 
                                style={styles.horizontalRow}
                            >
                                <View
                                    style={styles.square}
                                />
                                <Text
                                    style={fontStyles.caption}
                                >
                                    {kind}
                                </Text>
                            </View>
                            {/* name */}
                            <View 
                                style={styles.horizontalRow}
                            >
                                <Text
                                    style={[fontStyles.h2, { color: colors.black }]}
                                >
                                    {name}
                                </Text>
                            </View>
                            {/* status */}
                            <View 
                                style={styles.horizontalRow}
                            >
                                <Text
                                    style={[fontStyles.caption]}
                                >
                                    {status}
                                </Text>
                            </View>
                            {/* type */}
                            {
                                type ?
                                    <View 
                                        style={styles.horizontalRow}
                                    >
                                        <Text
                                            style={[fontStyles.caption]}
                                        >
                                            {type}
                                        </Text>
                                    </View>
                                :
                                    null
                            }
                            {/* gener */}
                            <View 
                                style={styles.horizontalRow}
                            >
                                <Text
                                    style={[fontStyles.caption]}
                                >
                                    {gender}
                                </Text>
                            </View>
                        </View>
                        {/* ContainerLike */}
                        <View 
                            style={styles.containerLike}
                        >
                            <TouchableOpacity
                                onPress={()=>{
                                   
                                }}
                            >

                                <Icon 
                                    type={"Entypo"} 
                                    name="heart-outlined" 
                                    style={[styles.iconLikeNot ]} 
                                />
                            </TouchableOpacity>
                        </View>
                </Shadow>
            </Animatable.View>
        </TouchableOpacity>
    )
}

export default CardCharacter;