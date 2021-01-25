import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const colors = require('../../styles').colors;
const dimensions = require('../../styles').dimensions;
const fontStyles = require('../../styles').fontStyles;


let styles = StyleSheet.create({
    container:{
        width: dimensions.width,
        height:moderateScale(80),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:moderateScale(20), 
        paddingTop: moderateScale(30),
        backgroundColor: colors.principal,
    },
    icon:{
        ...fontStyles.h1BoldWhite, 
        fontSize: moderateScale(20),
        color: colors.white
    },
    paddingLeft:{
        paddingLeft: moderateScale(50)
    },  
})

module.exports = {
    styles
}