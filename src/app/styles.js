import { moderateScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace } from 'react-native-iphone-x-helper';

//Colors
const principal = '#232E5B';
const black = 'rgb(0,0,0)';
const white = 'rgb(255,255,255)';
const gray = 'rgb(99,95,96)';
const secondaryGray = "#CBCBCB";
const line = '#e8e8e8';
const backgroundColor = "#FAFAFA";
const gradient = ['#2b2674', '#0d74b4'];
const red =  "#EB5851"

module.exports = {
    colors:{
        principal,
        black,
        gray,
        white,
        backgroundColor,
        gradient,
        line,
        red,
        secondaryGray
    },
    fontStyles:{
        title:{
            fontSize:moderateScale(25),
            fontWeight:"bold",
            color:black,
        },
        titleNormal:{
            fontSize:moderateScale(25),
            color:black,
        },
        h1Bold:{
            fontSize:moderateScale(18),
            fontWeight:"bold",
            color:gray,
        },
        h1BoldWhite:{
            fontSize:moderateScale(18),
            fontWeight:"bold",
            color:white,
        },
        h1:{
            fontSize:moderateScale(18),
            color:black,
        },
        h2Bold:{
            fontSize:moderateScale(16),
            fontWeight:"bold",
            color:gray,
        },
        h2:{
            fontSize:moderateScale(16),
            color:gray,
        },
        h3Bold:{
            fontSize:moderateScale(14),
            fontWeight:"bold",
            color:gray,
        },
        h3:{
            fontSize:moderateScale(14),
            color:black,
        },
        textBold:{
            fontSize:moderateScale(12),
            color:gray,
            fontWeight:"bold",
        },
        text:{
            fontSize:moderateScale(12),
            color:black,
        },
        captionBold:{
            fontSize:moderateScale(10),
            color:black,
            fontWeight:"bold",
        },
        caption:{
            fontSize:moderateScale(10),
            color:black,
        },
    },
    themeClasses:{
        container:{
            flex:1,
            backgroundColor:backgroundColor,
        },
        horizontalRow:{
            width:"100%",
            flexDirection: "row",
        },
        paddingTop:{
            paddingTop:getStatusBarHeight(true) ? getStatusBarHeight(true) + moderateScale(10) : moderateScale(5)
        },
        paddingBottom:{
            paddingBottom:getBottomSpace()
        },
        fullCenterAlign:{
            alignItems: 'center', 
            justifyContent: 'center'
        },
        marginHorizontal:{
            paddingHorizontal:moderateScale(20)
        }
    },
    dimensions:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    }
}
