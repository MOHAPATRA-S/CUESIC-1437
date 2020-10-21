
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Alert,  } from "react-native"
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
import AsyncStorage from '@react-native-community/async-storage';
import { changepassword, clearAction } from '../../Action/Action';

export default Changepassword = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch=useDispatch()
    const { Mobile_Number_email_address,
        old_Password_error,
        Change_Password,
        Change,
        Old_password,
        New_password,
        Confirm_New_Password,
        confirmpassword_error,
        new_Password_error
    } = state.language

    let [inbuiltstate, setState] =
        useState({
            Token:"",
            confirmpassword: "",
            confirmpasswordStatus: false,
            confirmpasswordError: "",
            password: "",
            passwordStatus: false,
            passwordError: '',
            oldpassword: "",
            oldpasswordStatus: false,
            oldpasswordError: '',

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

        if (inbuiltstate.oldpasswordStatus) {
        if (inbuiltstate.passwordStatus) {
            if (inbuiltstate.confirmpasswordStatus) {
                let changpassworddetails={
                    oldPassword:inbuiltstate.oldpassword,
                    newPassword:inbuiltstate.password,
                    confirmPassword:inbuiltstate.confirmpassword

                }

                let Token= inbuiltstate.Token
                dispatch(changepassword(changpassworddetails,Token))
                // Actions.Setting()
            }
            else { setState({ ...inbuiltstate, confirmpasswordstatus: false, confirmpasswordError: confirmpassword_error, }) }
        }
        else { setState({ ...inbuiltstate, passwordstatus: false, passwordError: new_Password_error, }) }


    }
    else { setState({ ...inbuiltstate, oldpasswordStatus: false, oldpasswordError: old_Password_error, }) }

    }
    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
              
                setState({
                    ...inbuiltstate,
                    Token:JSON.parse(resp)

                })
            }
        })
    }, [])

    useEffect(() => {

        switch (state.case) {
            case "CHANGEPASSWORD_FAILURE":

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
            case "CHANGEPASSWORD_SUCCESS":
                Alert.alert(
                    "",
                    state.message,
                    [

                        {
                            text: "OK", onPress: () =>
                            console.log("OK Pressed")
                        }
                    ],
                    { cancelable: false }
                );

                dispatch(clearAction())

                break

        }

    }, [state])
    return (
        <Container 
        backnavigate={()=>Actions.pop()}
        scrollable Withoutimage header title={Change_Password}>
            <AppView style={{marginTop: 50,}}>
                <Input
                    placeholder={Old_password}
                    textInput={{ width: wp("80%") }}
                    secure
                    value={inbuiltstate.oldpassword.trim()}
                    onChangeText={(text) => handlevalidate(text, "oldpassword")}
                    errortext={inbuiltstate.oldpasswordError}

                />
                <Input
                    placeholder={New_password}
                    textInput={{ width: wp("80%") }}
                    secure
                    value={inbuiltstate.password.trim()}
                    onChangeText={(text) => handlevalidate(text, "password")}
                    errortext={inbuiltstate.passwordError}

                />
                <Input
                    placeholder={Confirm_New_Password}
                    textInput={{ width: wp("80%") }}
                    secure
                    value={inbuiltstate.confirmpassword.trim()}
                    onChangeText={(text) => handlevalidate(text, "confirmpassword")}
                    errortext={inbuiltstate.confirmpasswordError}

                />
            </AppView>
<AppView style={{marginTop: 30,}}>
    <CustomButton
                onPress={() => Submit()}

                buttonText={Change}
                textstyle={[style.normalText, { fontSize: 20, color: WHITE }]}

            />
</AppView>
            

        </Container>






    )

}