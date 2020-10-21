import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, BLACK, DarkGrey, GRAY, PURPLE, Error_Red } from "../../styles/colors";
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

export default style = {
    InputView: {
        padding: 10,
        paddingHorizontal: 25
    },
    marginTop: {
        marginTop: 20
    },
    marginTopButton: {
        marginTop: 50
    },
    OTPLayout: {
       height,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    },

    normalText: {
        fontSize: normalizeFont(15),
        color: BLACK,
        fontWeight: "normal",
        // textAlign: "center"
       
    },
    connectedcount: {
        width: width * 0.8,
        height: height * 0.1,
        alignItems: "center",
        justifyContent: "center",
        top: 10,
    },
    otpinputLayout: {
        width: width * 0.8,
        height: height * 0.08,
        alignItems: "center",
        justifyContent: "space-between",

        flexDirection: 'row',
        marginTop: scaleHeight(20)
    },
    otpBoxlayout: {
        borderBottomWidth:5,
        borderColor:"rgb(0,127,189)",
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp("15%"),
        height: hp("8%"),
       fontSize: 18,
       fontWeight:"bold",
        borderRadius: 2.5,
        color: BLACK
        
    },
    resendlayout: {
        width:  width * 0.8,
        height: height * 0.08,
        alignItems: "flex-start",
        // justifyContent: "space-between",
        marginTop: scaleHeight(20),
        // flexDirection: 'row',

    },
    submittextstyle: {
        fontSize: normalizeFont(20),
        color: WHITE,
        fontWeight: "bold"
    },
    lastcontainer: {
        flexDirection: 'row',
        width: width * 0.85,
        height: height * 0.15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
    },
    LinkText: {
        fontSize: normalizeFont(14),

        color: PURPLE,
        textDecorationLine: 'underline',
    },
  
    // mainContainer: {
    //     alignItems: "center",
    //     flex: 1,
    //     backgroundColor: 'rgba(0,0,0,0.8)',
    //     justifyContent: 'center'
    // },
    // Modalcontainer: {
    //     borderRadius: 8,
    //     marginTop: hp("35%"),
    //     alignItems: "center",
    //     alignSelf: 'center',
    //     width: wp("70%"),
    //     backgroundColor: "white",
    //     height: hp("28%"),
    //     marginBottom: hp("30%")
    // },
    unselectedLayout:{
        width:wp("85%"),
        alignSelf: 'center',
        height:hp("4%"),
        backgroundColor: WHITE,
        marginVertical: hp("1%"),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
       
    },
}