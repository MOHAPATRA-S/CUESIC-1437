import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DarkGrey, Error_Red, nevybl, PURPLE } from '../../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');

export default style = {
    container: {
        height: height,
        width: width,

    },
    whiteBack: {
        height: height * 0.65,
        width: width,
        backgroundColor: WHITE,
        alignSelf: "center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 42,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    imagecontainer: {
        // position: "absolute",
        height: height * 0.4,
        width: width,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(15),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    },
    notregisterYetlayout: {
        alignSelf: "center",
        width: wp("85%"),
        height: hp("8%"),
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row"
    },
    Remebertextstyle: {
        fontSize: normalizeFont(16),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: GRAY,

    },
    signuptesxtstyle: {
        // textDecorationLine: 'underline',
        fontSize: normalizeFont(16),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: "rgb( 10, 103, 169)",
    },


}