
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, BLACK, DarkGrey, GRAY, PURPLE, Error_Red } from "../../styles/colors";
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

export default style = {
    thinView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        width: width * 0.8,
        height: height * 0.12,
        // backgroundColor: "pink",
    },
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(19),
        // textAlign:"center",
        fontWeight: "normal",
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    },
    mainContainer: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center'
    },
    Modalcontainer: {
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        alignSelf: 'center',
        width: wp("85%"),
        backgroundColor: "white",
        justifyContent: 'center',
        // height: hp("%"),
    //   
    },
    // normalText: {
    //     color: BLACK,
    //     fontSize: scaleHeight(15),
    //     // fontWeight: 'bold',
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    // },
    PlayerInputcontainer: {
        height: hp("8%"),
        // backgroundColor: "yellow",
    },

}