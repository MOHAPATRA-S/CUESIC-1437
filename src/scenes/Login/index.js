
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Platform, Alert,  } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { halfbackground, cuejams, email, password, facebook, google, instagram } from '../../assets';
import { Input, CustomButton } from '../../components/molecules';
import { WHITE } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { handleValidations } from "./validate"
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { SignIn, clearAction, SocialSignIn } from '../../Action/Action';
import AsyncStorage from '@react-native-community/async-storage';

export default Login = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch();
    const { Email,
        Password,
        LoginButton,
        LOGIN,
        Forgot_Password,
        Email_error,
        Password_error,
        Dont_have_account,
        SignUp
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
        if (inbuiltstate.emailStatus) {
            if (inbuiltstate.passwordStatus) {
                let loginData = {
                    email: inbuiltstate.email,
                    password:inbuiltstate.password
                }
                dispatch(SignIn(loginData))

                // Actions.Home()
            }
            else {
                setState({ ...inbuiltstate, passwordstatus: false, passwordError: Password_error, })
            }
        }
        else { setState({ ...inbuiltstate, emailstatus: false, emailError: Email_error, }) }

    }

    const _facebook = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            (result) => {
                if (result.isCancelled) {
                } else {
                    AccessToken.getCurrentAccessToken().then((data) => {
                        const { accessToken } = data;
                        let token = accessToken.toString();
                        return fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                            .then((response) => response.json()
                                .then(facebookData => {
                                
                                    if (response.ok === true) {
                                        var reqData = {
                                            "socialId": facebookData.id ? facebookData.id : "",
                                            "socialType": "facebook",
                                            "email": facebookData.email ? facebookData.email : "",
                                            "fullName": facebookData.name ? facebookData.name : "",
                                        }
                                        console.log("favebook req=>", reqData)
                                        socialLogin(reqData)
                                    }
                                })
                            )
                            .catch((err) => {
                                console.log("catch in facebook==>", err)
                            })
                    })
                }
            }
        ).catch((err) => {
            console.log("catch in facebook==>", err)
        })
    }
    const GooglesignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("userInfo", userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    useEffect(() => {
        try {
            if (Platform.OS === "ios") {
                GoogleSignin.configure({
                    scopes: ["https://www.googleapis.com/auth/calendar"],
                    iosClientId: "339923151945-svj2s621qq6pp8jihqftipaf8a75spth.apps.googleusercontent.com",
                    webClientId: "yyyy",
                    offlineAccess: true
                });
            } else if (Platform.OS === "android") {
                GoogleSignin.hasPlayServices({ autoResolve: true });
                GoogleSignin.configure({
                    scopes: ["https://www.googleapis.com/auth/calendar"],
                    webClientId: "yyyy",
                    offlineAccess: true
                });
            }
        }
        catch (err) {
            console.log("Google error: ", err.code, err.message);
        }

    }, [])

   const  socialLogin=(reqData)=>{
       let socialDetails={
        socialId:reqData.socialId,
        socialType:reqData.socialType,
        fullName :reqData.fullName,
        email:reqData.email,

       }
       dispatch(SocialSignIn(socialDetails))
       
   }
    useEffect(() => {

        switch (state.case) {
            case "LOGIN_FAILURE":

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
            case "LOGIN_SUCCESS":
                // console.log("Token",state.Token)
                AsyncStorage.setItem("userToken",JSON.stringify(state.Token))
                Alert.alert(
                    "",
                    state.message,
                    [

                        {
                            text: "OK", onPress: () =>
                                Actions.Home()
                        }
                    ],
                    { cancelable: false }
                );

                dispatch(clearAction())

                break;
                case "SOCIALLOGIN_FAILURE":

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
                case "SOCIALLOGIN_SUCCESS":
                    // console.log("Token",state.Token)
                    AsyncStorage.setItem("userToken",JSON.stringify(state.Token))
                    Alert.alert(
                        "",
                        state.message,
                        [
    
                            {
                                text: "OK", onPress: () =>
                                    Actions.Home()
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
                    }}>

                        <AppText style={[style.normalText, { fontSize: 18, }]}>
                            {LoginButton}
                        </AppText>
                    </AppView>

                    <Input
                        placeholder={Email}
                        icon={email}
                        value={inbuiltstate.email.trim()}
                        iconneed
                        maxLength={30}
                        onChangeText={(text) => handlevalidate(text, "email")}
                    
                        errortext={inbuiltstate.emailError}

                    />
                    <Input
                        placeholder={Password}
                        icon={password}
                        secure
                        value={inbuiltstate.password.trim()}
                        iconneed
                        onChangeText={(text) => handlevalidate(text, "password")}
                        maxLength={16}
                        errortext={inbuiltstate.passwordError}

                    />

                    <CustomButton
                        onPress={() => Submit()}

                        buttonText={LOGIN}
                        textstyle={[style.normalText, { fontSize: 25, color: WHITE }]}

                    />
                    <AppView style={{
                        width: wp("80%"),
                        alignSelf: "center",
                        alignItems: "flex-end",
                        marginTop: 10,
                    }}>
                        <Touchable onPress={() => Actions.Forgot()} >
                            <AppText style={{
                                color: "rgb( 10, 103, 169)",
                                textDecorationLine: 'underline',
                                fontSize: 16,
                                fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
                            }}>
                                {Forgot_Password}
                            </AppText>
                        </Touchable>
                    </AppView>
                    <AppView style={{
                        height: height * 0.15,
                        width: width * 0.7,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // backgroundColor: "yellow",

                    }}>
                        <Touchable onPress={() => _facebook()}>
                            <AppImage
                                style={{ width: width * 0.2, height: height * 0.08, }}
                                source={facebook} />
                        </Touchable>
                        <Touchable onPress={() => GooglesignIn()}>
                            <AppImage style={{ width: width * 0.2, height: height * 0.08, }}
                                source={google} />
                        </Touchable>
                        <Touchable >
                            <AppImage style={{ width: width * 0.2, height: height * 0.08, }}
                                source={instagram} />
                        </Touchable>
                    </AppView>
                    <AppView style={style.notregisterYetlayout}>
                        <AppText style={style.Remebertextstyle}>
                            {Dont_have_account}
                        </AppText>
                        <Touchable onPress={() => Actions.Signup()}>
                            <AppText style={style.signuptesxtstyle}  >
                                {SignUp}
                            </AppText>
                        </Touchable>
                    </AppView>
                </KeyboardAwareScrollView>
            </AppView>



        </Container>



    )

}