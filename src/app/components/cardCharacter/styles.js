import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        width:dimensions.width * .9,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        ...themeClasses.marginHorizontal, 
        flexDirection:"row",
        marginTop: moderateScale(30),
        height: moderateScale(100),
        backgroundColor: colors.white,
        shadowColor: colors.line,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1 ,
        shadowRadius: moderateScale(2)
    },
    containerImage:{
        height: "100%",
        width: moderateScale(100)
    },
    containerText:{
        height: "100%",
        width: moderateScale(170),
        justifyContent:"center",
        paddingLeft: moderateScale(10)
    },
    containerLike:{
        height: "100%",
        width: moderateScale(60),
        alignItems: "center",
        paddingTop: moderateScale(5),
    },
    square:{
        width: moderateScale(5),
        height: moderateScale(5),
        backgroundColor: colors.black,
        marginRight: moderateScale(5)
    },
    horizontalRow:{
        ...themeClasses.horizontalRow,
        alignItems:"center",
        marginTop: moderateScale(5)
    },
    iconLike:{
        fontSize: moderateScale(20),
        color: colors.red
    },
    iconLikeNot:{
        fontSize: moderateScale(20),
        color: colors.secondaryGray
    }
})

module.exports = {
    styles
}