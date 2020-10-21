import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DarkGrey, Error_Red, nevybl, PURPLE } from '../../styles/colors'
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
        height: height * 0.9,
        width: width,
        backgroundColor: WHITE,
        alignSelf: "center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 42,
        alignItems: 'center',
        alignSelf: "flex-end",
        // justifyContent: 'center',

    },
    firstcontainer:{
        height: height * 0.1,
        width: width*0.85,
        alignSelf: 'center',
        alignItems: 'flex-start', 
        justifyContent: 'center',
    },
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(15),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    },
    mainContainer: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    Modalcontainer: {
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        alignSelf: 'center',
        width: wp("85%"),
        backgroundColor: "white",
        // height: hp("30%"),
      
    },
    Inputcontainer: {
        height: hp("8%"),
        // backgroundColor: "yellow",
    },


}