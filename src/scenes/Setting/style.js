
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, BLACK, DarkGrey, GRAY, PURPLE, Error_Red } from "../../styles/colors";
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

export default style = {
    thinView:{
alignItems: 'flex-start',
justifyContent: 'center',
flexDirection: 'row',
alignSelf: 'center',
width:width*0.9,
height:height*0.12,
// backgroundColor: "pink",
    },
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(15),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    }, 
}