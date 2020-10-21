
import React, { useState, useEffect } from 'react';
import { Dimensions, Image, Alert } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { halfbackground, cuejams, email, password, camara, checkboxtick, checkbox, profile } from '../../assets';
import { Input, CustomButton } from '../../components/molecules';
import { WHITE, DarkGrey, GRAY } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { handleValidations } from "./validate"
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { clearAction,SignUp } from '../../Action/Action';
import AsyncStorage from '@react-native-community/async-storage';
export default Signup = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch();
    const {

        Email_error,
        Password_error,
        Already_have_account,
        LOGIN,
        Sign_Up,
        Terms_conditions,
        I_agree,
        confirmpassword_error,
        Enter_mobile_number,
        firstname_error
    } = state.language



    let [Remeberme, setRemeberme] = useState(false);

    let [inbuiltstate, setState] =
        useState({
            email: "",
            emailError: "",
            emailStatus: false,
            password: "",
            passwordStatus: false,
            passwordError: '',
            imagepath: "",
            firstname: "",
            firstnameStatus: false,
            firstnameError: "",
            mobilenumber: "",
            mobilenumberStatus: false,
            mobilenumberError: "",
            confirmpassword: "",
            confirmpasswordStatus: false,
            confirmpasswordError: ""


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
    const openImage = (type) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64: true,
            cropping: true
        }).then(image => {
            setState({ ...inbuiltstate, imagepath: `data:image/gif;base64,${image.data}` })
        });
    }


    const Submit = () => {
        //Actions.Userinfo()
        if (inbuiltstate.firstnameStatus) {
            if (inbuiltstate.mobilenumberStatus) {
                if (inbuiltstate.emailStatus) {

                    if (inbuiltstate.passwordStatus) {
                        if (inbuiltstate.confirmpasswordStatus) {
                            if (Remeberme) {
                            let signupDetails = {
                                name: inbuiltstate.firstname,
                                email: inbuiltstate.email.toLowerCase(),
                                mobileNumber: inbuiltstate.mobilenumber,
                                password: inbuiltstate.password,
                                confirmPassword: inbuiltstate.confirmpassword,
                                profilePic:inbuiltstate.imagepath
                            }
                            dispatch(SignUp(signupDetails))
                            // Actions.reset("Home")
                        }
                            else {
                                alert("Please select check box.")
                            }
                        }
                        else { setState({ ...inbuiltstate, confirmpasswordstatus: false, confirmpasswordError: confirmpassword_error, }) }
                    }
                    else { setState({ ...inbuiltstate, passwordstatus: false, passwordError: Password_error, }) }


                }
                else { setState({ ...inbuiltstate, emailstatus: false, emailError: Email_error, }) }
            }
            else { setState({ ...inbuiltstate, mobilenumberstatus: false, mobilenumberError: Enter_mobile_number, }) }

        }
        else { setState({ ...inbuiltstate, firstnamestatus: false, firstnameError: firstname_error, }) }


    }
    useEffect(() => {


        if (state.case === "SIGNUP_FAILURE") {
            Alert.alert(
                "",
                state.message,
                [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );

            dispatch(clearAction())

        }
        else if (state.case === "SIGNUP_SUCCESS") {
            AsyncStorage.setItem("userToken",JSON.stringify(state.Token))
            Alert.alert(
                "",
                state.message,
                [

                    { text: "OK", onPress: () => Actions.Home()}
                ],
                { cancelable: false }
            );

            dispatch(clearAction())

        }


    }, [state])
    return (
        <Container Withoutimage={false} header={false}>
            <AppImage resizeMode="contain" style={{
                height: 150,
                width: 159,
                alignSelf: 'center',
            }}
                source={cuejams} />


            <AppView style={style.whiteBack}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>
                    <AppView style={{
                        height: height * 0.15,
                        alignItems: 'center',
                        alignSelf: 'center',
                        // justifyContent: 'center',
                        flexDirection: 'row',

                        marginVertical: 10,
                    }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            position: "absolute",
                        }} source={inbuiltstate.imagepath ? { uri: inbuiltstate.imagepath } : profile} />
                        <Touchable onPress={() => openImage()}>
                            <AppImage style={{
                                width: 50,
                                height: 50,
                                marginTop: 60,
                                zIndex: 2,
                                marginLeft: 60,
                            }} source={camara} />
                        </Touchable>

                    </AppView>

                    <Input
                        placeholder="Name"
                        textInput={{ width: wp("80%") }}
                        value={inbuiltstate.firstname}
                        maxLength={30}
                        onChangeText={(text) => handlevalidate(text, "firstname")}
                        errortext={inbuiltstate.firstnameError}

                    />
                    <Input
                        placeholder="Mobile Number"
                        textInput={{ width: wp("80%") }}
                        value={inbuiltstate.mobilenumber}
                        errortext={inbuiltstate.mobilenumberError}
                        maxLength={10}
                        onChangeText={(text) => handlevalidate(text, "mobilenumber")}
                    />

                    <Input
                        placeholder="Email"
                        textInput={{ width: wp("80%") }}
                        value={inbuiltstate.email}
                        // maxLength={30}
                        onChangeText={(text) => handlevalidate(text, "email")}
                        errortext={inbuiltstate.emailError}

                    />
                    <Input
                        placeholder="Password"
                        textInput={{ width: wp("80%") }}
                        secure
                        maxLength={16}
                        value={inbuiltstate.password.trim()}
                        onChangeText={(text) => handlevalidate(text, "password")}
                        errortext={inbuiltstate.passwordError}

                    />
                    <Input
                        placeholder="Confirm Password"
                        textInput={{ width: wp("80%") }}
                        secure
                        maxLength={16}
                        value={inbuiltstate.confirmpassword.trim()}
                        onChangeText={(text) => handlevalidate(text, "confirmpassword")}
                        errortext={inbuiltstate.confirmpasswordError}

                    />

                    <CustomButton
                        onPress={() => Submit()}

                        buttonText={Sign_Up}
                        textstyle={[style.normalText, { fontSize: 25, color: WHITE }]}

                    />

                    <AppView style={style.termconditionLayout}>
                        <Touchable onPress={() => setRemeberme(!Remeberme)}>
                            <AppImage
                                style={{ width: 20, height: 20 }}
                                source={Remeberme ? checkboxtick : checkbox}>

                            </AppImage>

                        </Touchable>
                        <AppText style={ { marginLeft: 10, color: DarkGrey,fontWeight:"normal" }} >
                            {I_agree}

                        </AppText>
                        <Touchable onPress={() => Actions.Termcondition()} >
                            <AppText style={style.LinkText, { color: DarkGrey }}>
                                {Terms_conditions}
                            </AppText>
                        </Touchable>
                    </AppView>
                    <AppView style={style.notregisterYetlayout}>
                        <AppText style={style.Remebertextstyle}>
                            {Already_have_account}
                        </AppText>
                        <Touchable onPress={() => Actions.Login()}>
                            <AppText style={style.signuptesxtstyle}  >
                                {LOGIN}
                            </AppText>
                        </Touchable>
                    </AppView>
                </KeyboardAwareScrollView>
            </AppView>

        </Container>



    )

}