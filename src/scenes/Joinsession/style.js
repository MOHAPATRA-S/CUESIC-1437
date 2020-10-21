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
        flex: 1,
        alignItems: 'center',

    },
    BoxLayout: {
        height: hp("8%"),
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        backgroundColor: WHITE,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        marginVertical: 8,

    },
    normaltext: {
        fontSize: normalizeFont(15),
        color: BLACK,
        // textAlign: "center"
       
    },
    otp_statuslayout: {
        width: width * 0.8,
        height: height * 0.1,
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        marginTop: 30,
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
    ErrorLayout: {

        alignSelf: "center",
        width: width * 0.8,
        height: hp("3%"),
        marginTop: scaleHeight(15),
    },
    Errortextstyle: {
        fontSize: normalizeFont(13),
        // fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: Error_Red

    },
    mainContainer: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center'
    },
    Modalcontainer: {
        borderRadius: 8,
        marginTop: hp("35%"),
        alignItems: "center",
        alignSelf: 'center',
        width: wp("70%"),
        backgroundColor: "white",
        height: hp("28%"),
        marginBottom: hp("30%")
    },
}