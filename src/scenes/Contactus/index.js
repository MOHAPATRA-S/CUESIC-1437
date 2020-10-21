
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Clipboard } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { contactemail ,contactphone} from '../../assets';

export default Contactus = (props) => {
    const state = useSelector(state => state).reducer;
    const {
        contactus_status,
        Contact_us
       
    } = state.language
    let [logoutmodal, setlogoutmodal] = useState(false);
    let [inbuiltstate, setState] =
        useState({
            radiostation: "",
            Linkmodal: false,
            name: "",
            nameError: "",
            nameStatus: false,

        });
    useEffect(() => {

        // setState({ ...inbuiltstate, radiostation: Musicstationlist })

    }, [])


    return (
        <Container 
        backnavigate={()=>Actions.pop()}
        scrollable Withoutimage header title={Contact_us}> 
               <AppView style={{height:height*0.1,width:width*0.9,alignSelf: 'center',}}>
                    <AppText style={[style.normalText, {
                fontSize: 17,
                marginTop: 20,
            }]}>
                {contactus_status}
            </AppText>
               </AppView>
           
            <AppView style={{
                height:height*0.05,
                width:width*0.5,alignSelf: 
                'center',
                marginTop: 10,
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'row',
               
                }}>
                    <AppView style={{width:width*0.1,   alignItems: 'center',}}>
                          <AppImage style={{width:width*0.1,height:15}} source={contactemail} />
                    </AppView>
              
                <AppText style={[style.normalText, {
                    fontSize: 17,
                    // width:width*0.4
                }]}>
                    www.cuesic.com
                            </AppText>
            </AppView>
            <AppView style={{
                height:height*0.05,
                width:width*0.5,alignSelf: 
                'center',
              
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                }}>
                     <AppView style={{width:width*0.1, alignItems: 'center',  right:10
}}>
                          <AppImage style={{width:width*0.1,height:20}}source={contactphone} />
                     </AppView>
               
                <AppText style={[style.normalText, {
                    fontSize: 17,
                    right:10

                }]}>
                    99999999999
                            </AppText>
            </AppView>
        </Container>



    )

}