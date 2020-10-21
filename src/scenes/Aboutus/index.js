
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Clipboard, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { bullet } from '../../assets';
import { StaticComponent } from '../../components/molecules';
import AsyncStorage from '@react-native-community/async-storage';
import { Staticcontent, clearAction } from '../../Action/Action';
import DeviceInfo from 'react-native-device-info';
let Token
export default Aboutus = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch=useDispatch()
    const {
        About_us,
       
    } = state.language
    let [inbuiltstate, setState] =
        useState({
          termStatus:false,
          privacystatus:false,
         staticdetails:""
        });
    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token=JSON.parse(resp)
            }
        })
    }, [])
    useEffect(() => {
        switch (state.case) {
            case "STATICCONTENT_SUCCESS":
               setState({...inbuiltstate,staticdetails:state.StaticDetails.description})
                dispatch(clearAction())
                break;
            case "STATICCONTENT_FAILURE":
                Alert.alert(
                    "",
                    state.message,
                    [
    
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
                dispatch(clearAction())
                break;
        }

    }, [state])
   
    const TermsApi = () => {
        let type= "T&C"
        dispatch(Staticcontent(type))
        setState({ ...inbuiltstate, termStatus: !inbuiltstate.termStatus, privacystatus: false })
      
    }
    const PrivacyPolicy = () => {
        let type= "PrivacyPolicy"
        dispatch(Staticcontent(type))
        setState({...inbuiltstate,privacystatus:!inbuiltstate.privacystatus,termStatus:false})}
    return (
        <Container 
        backnavigate={()=>Actions.pop()}
        scrollable Withoutimage header title={About_us}>      
                <Touchable
                onPress={()=>
                    TermsApi()}
                    
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.85,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            // justifyContent: 'center',
                            // height:40
                        }}
                    >
                           <AppText style={[style.normalText, {
                            fontSize: 20,
                            // marginLeft: 8,
                            fontWeight: 'bold',

                        }]}>
                           1.
                            </AppText>
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            marginLeft: 8,
                            fontWeight: 'bold',
                            color: "rgb( 28, 92, 222)",
                            textDecorationLine: 'underline',
                        }]}>
                            Terms and Conditions
                            </AppText>
                    </Touchable>
                    <Touchable
                     onPress={()=>PrivacyPolicy()}
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.85,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                        }}
                    >
                           <AppText style={[style.normalText, {
                            fontSize: 20,
                            // marginLeft: 8,
                            fontWeight: 'bold',
                        }]}>
                           2.
                            </AppText>
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            marginLeft: 8,
                            fontWeight: 'bold',
                            color: "rgb( 28, 92, 222)",
                            textDecorationLine: 'underline',

                        }]}>
                            Privacy Policy
                            </AppText>
                    </Touchable>
        
                        <AppView
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.85,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            // justifyContent: 'center',
                            // height:40
                        }}
                    >
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            // marginLeft: 8,
                            fontWeight: 'bold',

                        }]}>
                           3.
                            </AppText>
                            
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            marginLeft: 8,
                            fontWeight: 'bold',

                        }]}>
                          Version: 
                            </AppText>
                              <AppText style={[style.normalText, { fontSize: 20, fontWeight: "normal",width: width * 0.85 ,alignSelf: 'center',left:4}]}>
            v {DeviceInfo.getVersion()}
                        
                        </AppText>
                    </AppView>

{inbuiltstate.termStatus==true||inbuiltstate.privacystatus==true?
                    <StaticComponent 
                    headerstatus={inbuiltstate.termStatus?
                        "Terms and Conditions":"Privacy Policy"
                    }
                    staticcontent={inbuiltstate.staticdetails}
                    />
                    :
                   null
}
        </Container>

    )

}