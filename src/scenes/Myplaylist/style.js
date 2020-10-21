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
        height:height*0.7,
 
        alignItems: 'center',

    },

    normalText: {
        fontSize: normalizeFont(15),
        color: BLACK,
        // textAlign: "center"
       
    },

}