import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DarkGrey, Error_Red, nevybl, PURPLE } from '../../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');

export default style = {
    whiteBack: {
        height: height * 0.35,
        width: width,
        backgroundColor: WHITE,
        alignSelf: "center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 42,
        alignItems: 'center',
        bottom:35
        // position: "absolute",
        // justifyContent: 'center',

    },
 
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(15),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    },
    defaultContainer: {
        flex: 1,
        // justifyContent: "flex-end",
        // alignItems: "center",
        backgroundColor: WHITE
    },

}