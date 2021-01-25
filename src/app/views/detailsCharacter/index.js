import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'native-base';

//import components
import HeaderBar from '../../components/headerBar';


//import styles
const styles = require('./styles').styles;
const themeClasses = require('../../styles').themeClasses;
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;




export default class DeatilsCharacter extends Component {
     constructor(props) {
         super(props)
         this.state={
             isLoading: false,
             characters: Array(),
             refreshing: false
         }
    }

    render() {
        const { item } =  this.props;
        return (
            <View style={[themeClasses.container]}>
                {/* HeaderBar */}
                <HeaderBar
                    isBack
                />
                {/* Image */}
                <View
                    style={styles.containerImage}
                >
                    <Image
                        source={{uri: item ? item.image : ""}}
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
                            style={fontStyles.h3}
                        >
                             {
                                item ? 
                                    item.species 
                                : 
                                    ""
                             }
                        </Text>
                    </View>
                    {/* name */}
                    <View
                        style={styles.horizontalRow}
                    >
                        <Text
                            style={fontStyles.titleNormal}
                        >
                            {
                                item ? 
                                    item.name
                                :
                                    ""
                             }
                        </Text>
                    </View>
                    {/* status */}
                    <View
                        style={styles.horizontalRow}
                    >
                        <Text
                            style={[fontStyles.h2, { color: colors.black }]}
                        >
                            {
                                 item ? 
                                    item.status
                                :
                                    ""
                             }
                        </Text>
                    </View>
                    {/* type */}
                    {
                        item ?
                            item.type ?
                                <View
                                    style={styles.horizontalRow}
                                >
                                    <Text
                                        style={[fontStyles.h2, { color: colors.black }]}
                                    >
                                        {
                                            item.type
                                        }
                                    </Text>
                                </View>
                            :
                                null
                        :
                            null
                    }
                    {/* gener */}
                    <View
                        style={styles.horizontalRow}
                    >
                        <Text
                            style={[fontStyles.h2, { color: colors.black }]}
                        >
                            {
                                 item ? 
                                    item.gender
                                :
                                    ""
                             }
                        </Text>
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
                </View>
        </View>
        );
    }
}