import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Alert, Dimensions } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppImage } from '../../components/atoms';
import { Input, CustomButton } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import handleValidations from "./validate"
import { Actions } from 'react-native-router-flux';
import { light_blue } from '../../styles/colors';
import { barcode } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import { Joinsessionbymemebre,clearAction } from '../../Action/Action';
let Token

export default Joinsession = (props) => {
    const phoneOTP1 = useRef(null);
    const phoneOTP2 = useRef(null);
    const phoneOTP3 = useRef(null);
    const phoneOTP4 = useRef(null);
    const state = useSelector(state => state).reducer;
    const { want_Join_session,
        JOIN,
        Otp_Error,
        session_status,
        scan_barcode,
        OTP
    } = state.language
    const dispatch = useDispatch()
    const [inbuiltstate, setState] =
        useState({
            ...inbuiltstate,
            phoneotp1: '',
            phoneotp1Status: '',
            phoneotp2: '',
            phoneotp2Status: '',
            phoneotp3: '',
            phoneotp3Status: '',
            phoneotp4: '',
            phoneotp4Status: '',
            phoneError: ""
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
        if (inbuiltstate.phoneotp1Status && inbuiltstate.phoneotp2Status && inbuiltstate.phoneotp3Status && inbuiltstate.phoneotp4Status
        ) {
            let joinmemberDeatils = {
                generatedCode: `${inbuiltstate.phoneotp1}${inbuiltstate.phoneotp2}${inbuiltstate.phoneotp3}${inbuiltstate.phoneotp4}`
            }
          
            dispatch(Joinsessionbymemebre(joinmemberDeatils, Token))

        }
        else {
            setState({
                ...inbuiltstate,
                phoneError: "Please enter the code",
            })
        }
    }


    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
            }
        })
    }, [])


    useEffect(() => {
        switch (state.case) {
            case "JOIN_SUCCESS":
              AsyncStorage.setItem("GENERATE_CODE",JSON.stringify(`${inbuiltstate.phoneotp1}${inbuiltstate.phoneotp2}${inbuiltstate.phoneotp3}${inbuiltstate.phoneotp4}`))
                Alert.alert(
                    "",
                    state.message,
                    [

                        { text: "OK", onPress: () =>   Actions.Musicscreen({ "PageKey": "Leavesessioncase" }) }
                    ],
                    { cancelable: false }
                );

                dispatch(clearAction())

                break;
            case "JOIN_FAILURE":

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
            scrollable Withoutimage header={true} >
            <AppView style={style.OTPLayout}>
                <AppView style={style.otp_statuslayout}>
                    <AppText style={[style.normaltext, { fontWeight: "bold", fontSize: 23 }]}>
                        {want_Join_session}
                    </AppText>
                    <AppText style={style.normaltext}>
                        {session_status}
                    </AppText>
                </AppView>
                <AppView style={style.otpinputLayout}>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP1}
                        autofocus
                        value={inbuiltstate.phoneOTP1}
                        // keyboardType="number-pad"
                        returnKeyType="next"
                        onChangeText={(text) => { handleOTPInput(text, 'phoneotp', '1', phoneOTP1, phoneOTP2) }}

                    >

                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP2}
                        value={inbuiltstate.phoneOTP2}
                        // keyboardType="number-pad"
                        returnKeyType="next"
                        onChangeText={(text) => { handleOTPInput(text, 'phoneotp', '2', phoneOTP1, phoneOTP3) }}
                    >
                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP3}
                        value={inbuiltstate.phoneOTP3}
                        // keyboardType="number-pad"
                        returnKeyType="next"

                        onChangeText={(text) => { handleOTPInput(text, 'phoneotp', '3', phoneOTP2, phoneOTP4) }}
                    >
                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP4}
                        value={inbuiltstate.phoneOTP4}
                        // keyboardType="number-pad"
                        returnKeyType="done"

                        onChangeText={(text) => handleOTPInput(text, 'phoneotp', '4', phoneOTP3, phoneOTP4)}
                    >
                    </TextInput>
                </AppView>
                <AppView style={[style.ErrorLayout,]}>
                    <AppText style={style.Errortextstyle}>
                        {inbuiltstate.phoneError}
                    </AppText>
                </AppView>
                <AppView style={{ marginTop: 40 }}>
                    {/* <AppText style={[style.normaltext,{fontSize:18}]}>
{scan_barcode}
                    </AppText>
                    <AppImage style={{
                width: width * 0.6, alignSelf: "center",
                height: 100,
                marginVertical:  20,
            }} source={barcode} /> */}
                </AppView>


                <CustomButton
                    onPress={() => veryfyOTP()}
                    buttonText={JOIN}
                    textstyle={style.submittextstyle}
                >
                </CustomButton>
            </AppView>
        </Container>
    )
}