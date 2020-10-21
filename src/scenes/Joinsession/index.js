import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Alert,Dimensions } from 'react-native';
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView,AppImage } from '../../components/atoms';
import { Input, CustomButton } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import handleValidations from "./validate"
import { Actions } from 'react-native-router-flux';
import { light_blue } from '../../styles/colors';
import { barcode } from '../../assets';
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
    // let [Timer, setTimer] = useState(58)
    const [inbuiltstate, setState] =
        useState({
            ...inbuiltstate,
            phoneOTP1: '',
            phoneOTP1Status: '',
            phoneOTP2: '',
            phoneOTP2Status: '',
            phoneOTP3: '',
            phoneOTP3Status: '',
            phoneOTP4: '',
            phoneOTP4Status: '',
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
    let [Modalvisible, setModalvisible] = useState(false)
    const veryfyOTP = () => {
        if (inbuiltstate.phoneOTP1Status && inbuiltstate.phoneOTP2Status && inbuiltstate.phoneOTP3Status && inbuiltstate.phoneOTP4Status
        ) {
          Actions.Musicscreen()
        }
        else {
            setState({
                ...inbuiltstate,
                phoneError: "Please enter the code",
            })
        }
    }
  
    let [counter, Setcounter] = useState(20)


    const decreseCounter = async () => {
        counter = 20
      
        var myVar = setInterval(myTimer, 1000);
        function myTimer() {
           
            Setcounter(counter)
            counter--
            if (counter < 0) {
                clearInterval(myVar)
                Setcounter(0)
            }
        }
    }

    const Resendotp_Api = () => {
        decreseCounter()
        let otpDetails = {
            mobileNumber: props.mobile_number,

        }
        dispatch(Resend_Otp(otpDetails))
    }
    useEffect(() => {
        decreseCounter()
    }, [])
    return (
        <Container 
        backnavigate={()=>Actions.pop()}
        scrollable Withoutimage header={true} >
            <AppView style={style.OTPLayout}>
                <AppView style={style.otp_statuslayout}>
                <AppText style={[style.normaltext,{ fontWeight: "bold",fontSize:23}]}>
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
                        keyboardType="number-pad"
                        returnKeyType="next"
                        onChangeText={(text) => { handleOTPInput(text, 'phoneOTP', '1', phoneOTP1, phoneOTP2) }}

                    >

                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP2}
                        value={inbuiltstate.phoneOTP2}
                        keyboardType="number-pad"

                        returnKeyType="next"
                        onChangeText={(text) => { handleOTPInput(text, 'phoneOTP', '2', phoneOTP1, phoneOTP3) }}
                    >
                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP3}
                        value={inbuiltstate.phoneOTP3}
                        keyboardType="number-pad"
                        returnKeyType="next"

                        onChangeText={(text) => { handleOTPInput(text, 'phoneOTP', '3', phoneOTP2, phoneOTP4) }}
                    >
                    </TextInput>
                    <TextInput style={style.otpBoxlayout}
                        maxLength={1}
                        ref={phoneOTP4}
                        value={inbuiltstate.phoneOTP4}
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
                <AppView>
                    <AppText style={[style.normaltext,{fontSize:18}]}>
{scan_barcode}
                    </AppText>
                    <AppImage style={{
                width: width * 0.6, alignSelf: "center",
                height: 100,
                marginVertical:  20,
            }} source={barcode} />
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