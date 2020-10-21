
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Clipboard } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { contactemail, contactphone } from '../../assets';
import { clearAction, StaticContactus } from '../../Action/Action';
import HTML from 'react-native-render-html';

export default Contactus = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const {
        contactus_status,
        Contact_us

    } = state.language

    let [inbuiltstate, setState] =
        useState({
            adminemail: "",
            adminmobilenumber: "",
            staticdetails: ""

        });
    useEffect(() => {


        dispatch(StaticContactus())

    }, [])

    useEffect(() => {

        switch (state.case) {
            case "CONTACTUS_SUCCESS":
           
                setState({
                    ...inbuiltstate, staticdetails: state.contactusDetail.description, adminemail: state.contactusDetail.email
                    , adminmobilenumber: state.contactusDetail.mobileNumber
                })
                dispatch(clearAction())

                break;
            case "CONTACTUS_FAILURE":

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
    return (
        <Container
            backnavigate={() => Actions.pop()}
            scrollable Withoutimage header title={Contact_us}>
            <AppView style={{ height: height * 0.1, width: width * 0.9, alignSelf: 'center',alignItems: 'center',marginTop: 20, }}>
                {/* <AppText style={[style.normalText, {
                    fontSize: 17,
                    marginTop: 20,
                }]}>
                    {contactus_status}
                </AppText> */}

<HTML html={inbuiltstate.staticdetails}  />

            </AppView>

            <AppView style={{
                height: height * 0.05,
                width: width * 0.5, alignSelf:
                    'center',
                marginTop: 10,
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'row',

            }}>
                <AppView style={{ width: width * 0.1, alignItems: 'center', }}>
                    <AppImage style={{ width: width * 0.1, height: 15 }} source={contactemail} />
                </AppView>

                <AppText style={[style.normalText, {
                    fontSize: 17,
                    // width:width*0.4
                }]}>
                   {inbuiltstate.adminemail?inbuiltstate.adminemail:"cuesic@gmail.com"}
                            </AppText>
            </AppView>
            <AppView style={{
                height: height * 0.05,
                width: width * 0.5, alignSelf:
                    'center',

                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <AppView style={{
                    width: width * 0.1, alignItems: 'center', right: 10
                }}>
                    <AppImage style={{ width: width * 0.1, height: 20 }} source={contactphone} />
                </AppView>

                <AppText style={[style.normalText, {
                    fontSize: 17,
                    right: 10

                }]}>
                    {inbuiltstate.adminmobilenumber?inbuiltstate.adminmobilenumber:"+919999999999"}
                            </AppText>
            </AppView>
        </Container>



    )

}