import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { moderateScale } from 'react-native-size-matters';

// import styles
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions
const fontStyles = require('../../styles').fontStyles

let styles = StyleSheet.create({
    containerImage:{
        width: "100%",
        height: dimensions.height * .45
    },
    containerText:{
        width: "100%",
        ...themeClasses.marginHorizontal,
        marginTop: moderateScale(30)
    },
    containerLike:{
        width: "100%",
        alignItems: "flex-end",
        marginTop: moderateScale(40),
    },
    square:{
        width: moderateScale(7),
        height: moderateScale(7),
        backgroundColor: colors.black,
        marginRight: moderateScale(5)
    },
    horizontalRow:{
        ...themeClasses.horizontalRow,
        alignItems:"center",
        marginTop: moderateScale(20)
    },
    iconLike:{
        fontSize: moderateScale(35),
        color: colors.red
    },
    iconLikeNot:{
        fontSize: moderateScale(35),
        color: colors.secondaryGray
    }
})

module.exports = {
    styles
}