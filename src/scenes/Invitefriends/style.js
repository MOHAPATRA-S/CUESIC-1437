
import { Dimensions } from 'react-native'
import { Platform } from 'react-native';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { THEME, WHITE, GRAY, BLACK, ButtonTheme, DarkGrey, Error_Red, nevybl, PURPLE } from '../../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');

export default style = {
    unselectedLayout:{
        width:wp("85%"),
        borderWidth: 0.2,
        alignSelf: 'center',
        height:hp("10%"),
        backgroundColor: WHITE,
        marginVertical: hp("1%"),
        borderRadius: 5,
        borderColor: GRAY,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        shadowColor: 'gray',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowRadius: 4,
        shadowOpacity: 1.0
    },
    firstcontainer:{
        height: height * 0.05,
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
    invitefrnd:{
        width: '100%',
        height: height * 0.14,
        bottom: 0,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        shadowOffset: {  width: 0 },
        shadowOpacity: 0.8,
        // shadowRadius: 10,
        shadowColor: GRAY,
        borderopWidth: 0
    },
    mainContainer: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center'
    },
    Modalcontainer: {
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        alignSelf: 'center',
        width: wp("85%"),
        backgroundColor: "white",
        justifyContent: 'center',
        height: hp("20%"),
      
    },


}