import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from './responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DarkGrey, Error_Red, nevybl, PURPLE, Light_gray } from './colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
export default styles = {
    header: {
        height: height * 0.1,
        width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       

    },
    defaultText: {
        fontSize: normalizeFont(14),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: GRAY
    },
    defaultContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: THEME
    },
    headerTitleContainer: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideContainer: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    sideDoubleContainer: {

        width: '20%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerTitle: {
        color: BLACK,
        fontSize: scaleHeight(17),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        // marginTop: Platform.OS === 'ios' ? 10 : 0,
    },
    headerTitleextra: {
        color: WHITE,
        fontSize: scaleHeight(17),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        // marginTop: Platform.OS === 'ios' ? 10 : 0,
    },
    inputLayout: {
        width: wp("85%"),
        alignSelf: "center",
        height: hp("6%"),
        borderWidth: 0.5,
        borderColor: GRAY,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: WHITE

    },
    Inputcontainer: {
        height: hp("8.5%"),
        // backgroundColor: "yellow",
    },
    textInput: {
        width: wp("65%"),
        color: BLACK,
        marginLeft: scaleHeight(15),
        fontSize: 15,
        height: hp("6%"),
        // backgroundColor:"red",
        alignItems: 'center',
        justifyContent: 'center',
       


    },
    IconInputContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    Button: {
        backgroundColor: THEME,
        height: scaleHeight(50),
        width: width * 0.6,
        borderRadius: scaleHeight(25),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    },
    IconInput: {
        width: '85%'
    },
    backHeader: {
        height: height * 0.15
    },
    back: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    extrback:{
        width: 100,
        height: 35,
        resizeMode: 'contain'
    },
    BackgroundImageStyle: {
      
       width:wp("100%"), 
       
       height:hp("100%")
    },
    contentContainerStyle: {
        //   flex:1,

        // backgroundColor:"red"
    },

    DreawerText: {
        fontSize: normalizeFont(15),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: BLACK,
        paddingLeft: wp("4%")
    },
    DreawerusernameText: {
        fontSize: normalizeFont(16),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: BLACK,
        fontWeight: "bold"
    },
    Drawerstyle: {
        width: wp("80%"),
        flex: 1,
        backgroundColor: WHITE,
        borderTopRightRadius: 10,
    },
    Imagecontainer: {
        height: hp("30%"),
        width: wp("70%"),
        alignItems: "center",
        justifyContent: "center"
    },
    profileimagestyle: {
        width: wp("50%"),
        // height: hp("15%")
    },
    Drawerscenestyle: {
        width: wp("80%"),
        height: hp("7.5%"),
        alignItems: "center",
        justifyContent: "flex-start",
        // borderBottomWidth: 0.5,
        // borderBottomColor: BLACK,
        flexDirection: 'row',

    },
    ButtonLayout: {
        width: wp("85%"),
        height: hp("7%"),
        // backgroundColor: PURPLE,
        borderRadius: 5,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center'
    },
    OTPInputLayout: {
        borderWidth: 1,
        borderColor: DarkGrey,
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp("12%"),
        height: hp("7%"),
        backgroundColor: "white"
    },
    OTPtextInput: {
        height: hp("7%"),
        width: wp("12%"),
        padding: scaleHeight(10),
    },
    ErrorLayout: {
        alignSelf: "center",
        width: wp("80%"),
        height: hp("2%"),
    },
    Errortextstyle: {
        fontSize:Platform.OS === 'ios' ?  normalizeFont(13):normalizeFont(11),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
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
        // marginTop: hp("35%"),
        alignItems: "center",
        alignSelf: 'center',
        width: wp("85%"),
        backgroundColor: "white",
        // height: hp("28%"),
        padding: 15,
        // marginBottom: hp("30%")
    },
    HedTextLayout: {
        width: wp("70%"),
        alignItems: "center",
        height: hp("5%"),
        borderBottomWidth: 0.5,
        borderBottomColor: GRAY,
        justifyContent: "center",
        flexDirection: "row"
    },
    Headtextstyle: {
        width: wp("65%"),
        textAlign: "center",
        fontSize: normalizeFont(15),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: BLACK,
        fontWeight: "bold"
    },
    questionBoxlayout: {
        width: wp('60%'),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: hp('2%'),
        marginVertical: hp("1%"),

    },
    questiontextstyle: {
        fontSize: normalizeFont(13),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: BLACK,
        textAlign: "center",

    },
    buttonLayout: {
        alignItems: "center",
        alignSelf: "center",
        width: wp("50%"),
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: hp("1%")
    },
    DismisLayout: {
        backgroundColor: nevybl,
        width: wp("20%"),
        height: hp("3%")
    },
    submitLayout: {
        width: wp("20%"),
        height: hp("3%")
    },
    buttonTextstyle: {
        fontSize: normalizeFont(13),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: WHITE
    },
    crossView: {
        alignSelf: 'flex-end',
        // backgroundColor:"pink",
        width: wp("5%"),
        marginBottom: hp('2%'),
        // :wp('-1%')

    },

    LogoutLayout: {
        borderRadius: 8,
        marginTop: hp("35%"),
        alignItems: "center",
        alignSelf: 'center',
        width: wp("70%"),
        backgroundColor: "white",
        height: hp("15%"),
        marginBottom: hp("30%")
    },
    SearchInputlayout: {
        height: hp("5%"),
        width: wp("73%"),
        color: BLACK,
        alignItems: "center",
        justifyContent: "center"

    },
    Searchlayout: {

        flexDirection: 'row',
        width: wp("90%"),
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: WHITE,
        //  backgroundColor:"pink",
        height: hp("4%"),
        borderWidth: 0.9,
        borderColor: Light_gray,
        borderRadius: 7,
        marginTop: 10,

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
    //     width: wp("80%"),
    //     backgroundColor: "white",
    //     maxHeight: height * 0.8,
    //     marginBottom: hp("30%"),

    // },
    tabbar: {
        width,
        height: height * 0.075,
        // backgroundColor:'red'
    },
    socialtabbar: {
        width,
        height: height * 0.08,
        // backgroundColor:'red'
    },
    tabbarContainer: {
        width: '100%',
        height: height * 0.09,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderTopRightRadius: height * 0.01,
        borderTopLeftRadius: height * 0.01,
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: GRAY,
        // borderTopColor: "red",
        // backgroundColor:'red',
        borderTopWidth: 0
    },
    tabbarCenterIcon: {
        bottom: height * 0.035
    },
    PlayerInputcontainer: {
        height: hp("8%"),
        // backgroundColor: "yellow",
    },
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(15),
        // fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    },
}
