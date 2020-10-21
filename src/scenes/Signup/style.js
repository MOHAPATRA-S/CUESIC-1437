import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DARK_GRAY, Error_Red, nevybl, PURPLE } from '../../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');

export default style = {
    container: {
        // height: height,
        // width: width,
        // alignItems: "flex-end",
        flex: 1,

    },
    whiteBack: {
        flex:1,
        // height: height * 0.85,
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
        width: wp("80%"),
        height: Platform.OS=="ios"?hp("15%"):hp("10%"),
        alignItems: "flex-start",
        justifyContent: 'center',
        flexDirection: "row"
    },
    Remebertextstyle: {
        fontSize: normalizeFont(15),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: DARK_GRAY,

    },
    signuptesxtstyle: {
        fontSize: normalizeFont(15),
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: "rgb( 10, 103, 169)",
    },
    termconditionLayout: {
        width: width * 0.8,
        height: hp("5%"),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "center"
    },

}