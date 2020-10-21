import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, BLACK, DarkGrey, GRAY, PURPLE, Error_Red } from "../../styles/colors";
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

export default style = {
    defaultContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: WHITE
    },
    unselectedLayout:{
        width:wp("85%"),
     
        alignSelf: 'center',
        height:hp("10%"),
        backgroundColor: "rgb(239,239,239)",
        marginVertical: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
       
    },
    normalText: {
        color: BLACK,
        fontSize: scaleHeight(12),
        // fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',

    }, 
}