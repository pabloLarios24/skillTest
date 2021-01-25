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
        shadowRadius: moderateScale(10),
        flexDirection:"row"
    },
    containerSearch:{
        ...themeClasses.fullCenterAlign,
        width: "100%",
        ...themeClasses.marginHorizontal,
        marginTop: moderateScale(20)
    },
    containerText:{
        flex: 1,
        justifyContent:"center",
        height: "100%"
    },
    containerIcon:{
        flex: .15,
        justifyContent:"center",
        height: "100%"
    },
    icon:{
        fontSize: moderateScale(20),
        color: colors.red
    },
    containerButtonFilter:{
        width:"100%",
        alignItems:"center",
        ...themeClasses.marginHorizontal,
        marginTop: dimensions.height * .35
    },
    buttonFilter:{
        width: moderateScale(120),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        backgroundColor: colors.red,
        flexDirection: "row",
        ...themeClasses.fullCenterAlign,
    },
    textFilter:{
        ...fontStyles.h3Bold,
        color: colors.white
    },
    containerItemSelect:{
        width: moderateScale(150),
        height: moderateScale(40),
        padding: moderateScale(10),
    }
})

module.exports = {
    styles
}