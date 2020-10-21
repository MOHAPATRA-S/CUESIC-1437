
import React, { useState, useEffect } from 'react';
import { Dimensions, Alert, Platform } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { halfbackground, cuejams, blackcross } from '../../assets';
import { Input, CustomButton } from '../../components/molecules';
import { WHITE, DarkGrey } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { handleValidations } from './validate';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { resetpassword, clearAction } from '../../Action/Action';

export default Resetpassword = (props) => {
    console.log("props=>>>,desfs",props)
    const state = useSelector(state => state).reducer;
    const dispatch=useDispatch();
    const { Mobile_Number_email_address,
        Emailorphone_emptyerror,
        Reset_password,
        Change,
        Reset_status,
        New_password,
        Confirm_New_Password,
        confirmpassword_error,
        new_Password_error
    } = state.language

    let [inbuiltstate, setState] =
        useState({
            confirmpassword: "",
            confirmpasswordStatus: false,
            confirmpasswordError: "",
            password: "",
            passwordStatus: false,
            passwordError: '',

        });
    const handlevalidate = async (text, type) => {
        let status = `${type}Status`;
        let errorText = `${type}Error`;
        let resp = handleValidations(text, type)
        await setState({
            ...inbuiltstate,
            [type]: resp.value,
            [errorText]: resp.errorText,
            [status]: resp.status,
        })

    }
    const Submit = () => {


        if (inbuiltstate.passwordStatus) {
            if (inbuiltstate.confirmpasswordStatus) {
                // Actions.Login()
                let resetpassworddetails={
                    _id:props.ID,
                    newPassword:inbuiltstate.password,
                    confirmPassword:inbuiltstate.confirmpassword


                }
               
                dispatch(resetpassword(resetpassworddetails))
            }
            else { setState({ ...inbuiltstate, confirmpasswordstatus: false, confirmpasswordError: confirmpassword_error, }) }
        }
        else { setState({ ...inbuiltstate, passwordstatus: false, passwordError: new_Password_error, }) }




    }
    useEffect(() => {

        switch (state.case) {
            case "RESETPASSWORD_FAILURE":

                Alert.alert(
                    "",
                    state.message,
                    [

                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                )
                dispatch(clearAction())
                break;
            case "RESETPASSWORD_SUCCESS":
                Alert.alert(
                    "",
                    state.message,
                    [

                        {
                            text: "OK", onPress: () =>
                                Actions.Login()
                        }
                    ],
                    { cancelable: false }
                );

                dispatch(clearAction())

                break

        }

    }, [state])
    return (
        <Container header={false}>
            <AppImage style={{
                height: height * 0.35,
                width: width * 0.5,
                alignSelf: 'center',
            }}
                source={cuejams} />

            <AppView style={style.whiteBack}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>

                    <AppView style={{
                        height: height * 0.1,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        width: width,

                    }}>
                        <AppView style={{
                            height: height * 0.1,
                            alignItems: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            width: width * 0.85,


                        }}>
                            <AppText style={[style.normalText, { fontSize: 19, marginLeft: 30, }]}>
                                {Reset_password}
                            </AppText>

                        </AppView>
                        <Touchable
                            onPress={() => Actions.Forgot()}
                            style={{
                                width: width * 0.1,
                                height: height * 0.1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <AppImage style={{ width: 20, height: 20, right: 10 }} source={blackcross} />

                        </Touchable>
                    </AppView>

                    <AppView style={{
                        height: height * 0.1,
                        width: width * 0.8,
                        alignItems: 'flex-start',
                        alignSelf: 'center',
                        // backgroundColor: "pink",

                    }}>
                        <AppText style={[style.normalText, { fontSize: 17, fontWeight: "normal", }]}>
                            {Reset_status}
                        </AppText>

                    </AppView>
                    <Input
                        placeholder={New_password}
                        textInput={{ width: wp("80%") }}
                        secure
                        value={inbuiltstate.password}
                        onChangeText={(text) => handlevalidate(text, "password")}
                        errortext={inbuiltstate.passwordError}

                    />
                    <Input
                        placeholder={Confirm_New_Password}
                        textInput={{ width: wp("80%") }}
                        secure
                        value={inbuiltstate.confirmpassword}
                        onChangeText={(text) => handlevalidate(text, "confirmpassword")}
                        errortext={inbuiltstate.confirmpasswordError}

                    />
                   <AppView style={{marginTop: 20,
                       alignItems: 'flex-start',height: Platform.OS=="ios"?height*0.2:height*0.2}}>

                          <CustomButton
                        onPress={() => Submit()}

                        buttonText={Change}
                        textstyle={[style.normalText, { fontSize: 25, color: WHITE }]}

                    />

                     </AppView>
                   

                </KeyboardAwareScrollView>
            </AppView>



            {/* </ImageBackground> */}
        </Container>



    )

}