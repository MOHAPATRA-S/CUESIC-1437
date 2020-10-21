
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Forgotpassword, clearAction } from '../../Action/Action';
export default Forgot = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch();

    const { Mobile_Number_email_address,
        Emailorphone_emptyerror,
        Forgot_,
        SUBMIT,
        Forgot_status,
        Email_error,
        Password_error,
        Dont_have_account,
        Emailorphone_error
    } = state.language
    let [inbuiltstate, setState] =
        useState({
            email: "",
            emailError: "",
            emailStatus: false,
            password: "",
            passwordStatus: false,
            passwordError: '',

        });
    const handlevalidate = (text) => {
        let emailRegex = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/i;
        if (text == "") {
            setState({
                ...inbuiltstate,

                email: "",
                emailStatus: false,
                emailError: Emailorphone_emptyerror,
            })
        }
        else if (!emailRegex.test(text)) {
            setState({
                ...inbuiltstate,

                email: "",
                emailStatus: false,
                emailError: Emailorphone_error,
            })


        }
        else {
            setState({
                ...inbuiltstate,

                email: text,
                emailStatus: true,
                emailError: "",
            })
        }

    }
    const Submit = () => {
        if (inbuiltstate.emailStatus) {
            // Actions.OtpVerification()
            let forgotDetails = {
                email: inbuiltstate.email,
            }
            dispatch(Forgotpassword(forgotDetails))

        }
        else { setState({ ...inbuiltstate, emailstatus: false, emailError: Emailorphone_emptyerror, }) }

    }
    useEffect(() => {

        switch (state.case) {
            case "FORGOT_FAILURE":

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
            case "FORGOT_SUCCESS":
                Alert.alert(
                    "",
                    state.message,
                    [

                        {
                            text: "OK", onPress: () =>
                                Actions.OtpVerification({ ID:state.forgotDetails._id,OTP: state.forgotDetails.otp ,usersentotp:state.forgotDetails.email==undefined?state.forgotDetails.mobileNumber:state.forgotDetails.email})
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
                                {Forgot_}
                            </AppText>

                        </AppView>
                        <Touchable
                            onPress={() => Actions.Login()}
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
                        height: height * 0.12,
                        width: width * 0.85,
                        alignItems: 'center',
                        alignSelf: 'center',

                    }}>
                        <AppText style={[style.normalText, { fontSize: 17, fontWeight: "normal" }]}>
                            {Forgot_status}
                        </AppText>

                    </AppView>
                    <Input
                        placeholder={Mobile_Number_email_address}
                        // value={inbuiltstate.email}
                        textInput={{ width: wp("80%") }}
                        maxLength={30}
                        onChangeText={(text) => handlevalidate(text, "email")}
                        errortext={inbuiltstate.emailError}
                    />
                    <AppView style={{ marginTop: 30,
                        alignItems: "flex-start", height: Platform.OS == "ios" ? height * 0.2 : height * 0.2 }}>
                        <CustomButton
                            onPress={() => Submit()}

                            buttonText={SUBMIT}
                            textstyle={[style.normalText, { fontSize: 25, color: WHITE }]}

                        />

                    </AppView>
                </KeyboardAwareScrollView>
            </AppView>

        </Container>
    )

}