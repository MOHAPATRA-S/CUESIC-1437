import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DarkGrey, Error_Red, nevybl, PURPLE } from '../../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');

export default style = {
    container: {
        flex:1

    },
    whiteBack: {
        // height: height * 0.65,
        flex:1,
        width: width,
        backgroundColor: WHITE,
        alignSelf: "center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 42,
        alignItems: 'center',
        justifyContent: 'center',

    },
    understandcontainer: {
        // position: "absolute",
        height: height * 0.3,
        width: width*0.9,
        alignSelf: 'flex-start',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
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