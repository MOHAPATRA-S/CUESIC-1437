import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Alert, Dimensions } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, } from '../../components/atoms';
import { Input, CustomButton } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import handleValidations from "./validation"
import { Actions } from 'react-native-router-flux';
import { light_blue } from '../../styles/colors';
import { clearAction, Verify, Resend } from '../../Action/Action';
export default OtpVerification = (props) => {
    const phoneOTP1 = useRef(null);
    const phoneOTP2 = useRef(null);
    const phoneOTP3 = useRef(null);
    const phoneOTP4 = useRef(null);
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch();
    const { OTP_Verification,
        SUBMIT,
        Otp_Error,
        Otp_status,
        Enter_OTP,
        OTP
    } = state.language
    const [inbuiltstate, setState] =
        useState({
            phoneOTP1: '',
            phoneOTP1Status: '',
            phoneOTP2: '',
            phoneOTP2Status: '',
            phoneOTP3: '',
            phoneOTP3Status: '',
            phoneOTP4: '',
            phoneOTP4Status: '',
            phoneError: "",
            resenddisable: true
        });
    const handleOTPInput = async (text, type, index, prevInput, nextInput) => {
        let status = `${type}${index}Status`;
        let Otpvalue = `${type}${index}`
        let resp = handleValidations(text, prevInput, nextInput)
        await setState({
            ...inbuiltstate,
            [Otpvalue]: resp.value,
            [status]: resp.status,
            phoneError: "",
        })
    }

    const veryfyOTP = () => {
        if (inbuiltstate.phoneOTP1Status && inbuiltstate.phoneOTP2Status && inbuiltstate.phoneOTP3Status && inbuiltstate.phoneOTP4Status
        ) {
            let otpDetails = {
                mobileNumber: props.usersentotp.toLowerCase(),
                otp: `${inbuiltstate.phoneOTP1}${inbuiltstate.phoneOTP2}${inbuiltstate.phoneOTP3}${inbuiltstate.phoneOTP4}`
            }
            dispatch(Verify(otpDetails))

        }
        else {
            setState({
                ...inbuiltstate,
                phoneError: Otp_Error,
            })
        }
    }

    let [counter, Setcounter] = useState(30)
    const decreseCounter = async () => {
        counter = 30

        var myVar = setInterval(myTimer, 1000);
        function myTimer() {

            Setcounter(counter)
            counter--
            if (counter < 0) {
                clearInterval(myVar)
                Setcounter(0)
                setState({ ...inbuiltstate, resenddisable: false })

            }
        }
    }

    const ResendotpApi = () => {
        setState({ ...inbuiltstate, resenddisable: true })
        decreseCounter()
        let resenddetails = {
            email: props.usersentotp.toLowerCase(),
        }
      
        dispatch(Resend(resenddetails))
    }
    useEffect(() => {
        decreseCounter()
    }, [])
    useEffect(() => {
      
        switch (state.case) {
            case "VERIFY_FAILURE":

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

            case "VERIFY_SUCCESS":
                // Setcounter(0)

                Alert.alert(
                    "",
                    state.message,
                    [
                        { text: "OK", onPress: () => Actions.Resetpassword({ ID: props.ID }) }
                    ],
                    { cancelable: false }
                );

                    dispatch(clearAction())
                break;


            case "RESENDOTP_SUCCESS":
                Alert.alert(
                    "",
                    "OTP resend successfully",
                    [

                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );

                dispatch(clearAction())

                break;
            case "RESENDOTP_FAILURE":

                Alert.alert(
                    "",
                    state.case,
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
            scrollable Withoutimage header={true} title={Enter_OTP}>
            <AppView style={style.OTPLayout}>
                <AppView style={style.otp_statuslayout}>
                    <AppText style={[style.normaltext, { fontWeight: "bold", fontSize: 18 }]}>
                        {OTP}
                    </AppText>
                    <AppText style={style.normaltext}>
                        {Otp_status}
                    </AppText>
                </AppView>
                <AppView style={style.otpinputLayout}>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP1}
                        autofocus

                        value={inbuiltstate.phoneOTP1.trim()}
                        keyboardType="number-pad"
                        returnKeyType="next"
                        onChangeText={(text) => { handleOTPInput(text, 'phoneOTP', '1', phoneOTP1, phoneOTP2) }}

                    >

                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP2}
                        value={inbuiltstate.phoneOTP2.trim()}
                        keyboardType="number-pad"

                        returnKeyType="next"
                        onChangeText={(text) => { handleOTPInput(text, 'phoneOTP', '2', phoneOTP1, phoneOTP3) }}
                    >
                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP3}
                        value={inbuiltstate.phoneOTP3.trim()}
                        keyboardType="number-pad"
                        returnKeyType="next"

                        onChangeText={(text) => { handleOTPInput(text, 'phoneOTP', '3', phoneOTP2, phoneOTP4) }}
                    >
                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP4}
                        value={inbuiltstate.phoneOTP4.trim()}
                        keyboardType="number-pad"
                        returnKeyType="next"

                        onChangeText={(text) => handleOTPInput(text, 'phoneOTP', '4', phoneOTP3, phoneOTP4)}
                    >
                    </TextInput>
                </AppView>
                <AppView style={[style.ErrorLayout,]}>
                    <AppText style={style.Errortextstyle}>
                        {inbuiltstate.phoneError}
                    </AppText>
                </AppView>
                <AppView style={style.resendlayout}>

                    <AppText style={[style.normaltext, {
                        color: light_blue,
                        textDecorationLine: 'underline',
                        fontSize: 19,
                    }]}>
                        00:{counter}
                    </AppText>
                    <Touchable
                        onPress={() => ResendotpApi()}
                        disabled={inbuiltstate.resenddisable}
                    >
                        <AppText style={[style.normaltext, {
                            color: light_blue,
                            textDecorationLine: 'underline',
                            fontSize: 19,
                        }]}>
                            Resend
                    </AppText>
                    </Touchable>
                </AppView>
                <CustomButton
                    disabled={inbuiltstate.resenddisable == true ? false : true}
                    onPress={() => veryfyOTP()}
                    buttonText={SUBMIT}
                    textstyle={style.submittextstyle}
                >
                </CustomButton>
            </AppView>
        </Container>
    )
}