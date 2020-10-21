import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DarkGrey, Error_Red, nevybl, PURPLE } from '../../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');

export default style = {

    firstcontainer:{
        width: width*0.85,
        alignSelf: 'center',
        alignItems: 'flex-start', 
        justifyContent: 'center',
       
    },
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(15),
        // fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    },
    smallimage:{
        width:20,
        height:20
    }


}