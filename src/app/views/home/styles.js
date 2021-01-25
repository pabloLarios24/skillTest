import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { moderateScale } from 'react-native-size-matters';

// import styles
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions
const fontStyles = require('../../styles').fontStyles

let styles = StyleSheet.create({
    containerInput:{
        width: dimensions.width * .9,
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: colors.white,
        marginTop:moderateScale(20),
        paddingLeft: moderateScale(10),
        shadowColor: colors.line,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1 ,
        shadowRadius: moderateScale(10)
    },
    containerSearch:{
        ...themeClasses.fullCenterAlign,
        width: "100%",
        ...themeClasses.marginHorizontal
    },
    containerButtonFilter:{
        width:"100%",
        alignItems:"flex-end",
        ...themeClasses.marginHorizontal,
        marginTop: moderateScale(10)
    },
    buttonFilter:{
        width: moderateScale(100),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        backgroundColor: colors.red,
        flexDirection: "row",
        ...themeClasses.fullCenterAlign,
        marginBottom: moderateScale(10)
    },
    textFilter:{
        ...fontStyles.h3Bold,
        color: colors.white
    },
    input:{
        flex:1,
        ...fontStyles.h3
    },  
    iconMap:{
        fontSize:moderateScale(18),
        color: colors.white,
        marginRight: moderateScale(2)
    },
    line:{
        width:"100%",
        height: moderateScale(2),
        backgroundColor:colors.line
    },
    containerSearch:{
        paddingTop: moderateScale(10),
        width: "100%",
        ...themeClasses.marginHorizontal
    },
})

module.exports = {
    styles
}