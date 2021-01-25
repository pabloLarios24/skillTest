import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions

let styles = StyleSheet.create({
    containerImage:{
        width: "100%", 
        height: dimensions.height * .38, 
        overflow: "hidden",
        paddingVertical: moderateScale(50),
        ...themeClasses.fullCenterAlign
    },
    containerOver:{
        position:"absolute",
        top: dimensions.height * .33,
    },
    iconHeader:{
        color:colors.secondaryBlue,
        fontSize: moderateScale(25)
    },
    iconButton:{
        color:colors.white,
        fontSize: moderateScale(20)
    },
    containerIconsHeader:{
        width:"100%", 
        flexDirection:"row", 
        ...themeClasses.marginHorizontal, 
        justifyContent:"space-between",
        marginTop: moderateScale(10)
    },
    container:{
        width:"100%", 
        ...themeClasses.fullCenterAlign, 
        ...themeClasses.marginHorizontal, 
        marginTop: moderateScale(30)
    },
    containerMain:{
        width: dimensions.width,
        height: dimensions.height,
    },
    buttonsLogin:{
        width: moderateScale(240),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        ...themeClasses.fullCenterAlign,
        flexDirection:"row",
        backgroundColor: colors.white,
        marginTop: moderateScale(50)
    },
    input:{
        ...fontStyles.h3Bold,
        color: colors.secondaryBlack,
    },
    subTitle:{ 
        textAlign: "center", 
        marginTop: moderateScale(10), 
        color: colors.white 
    },
    title: { 
        fontStyle: "italic", 
        color: colors.white 
    },
    imageSize: {
        width: "90%", 
        height: "92%"
    },
    containerInput:{
        width: moderateScale(220),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
        marginTop:moderateScale(20),
        paddingLeft: moderateScale(10)
    }
})

module.exports = {
    styles
}