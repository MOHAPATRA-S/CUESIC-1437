
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { contactemail, contactphone } from '../../assets';
import { Drop_Down_Modal_forall } from '../../components/molecules';
import AsyncStorage from '@react-native-community/async-storage';
import { clearAction,DeleteAccount } from '../../Action/Action';
let Token
export default Account = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch=useDispatch()
    const {
        Payment_option,
        Account,
        Change_Password,
        Delete_Account,
        Deleteaccount_status

    } = state.language
    let [deletemodal, setdeletemodal] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {


                Token = JSON.parse(resp)


               
            }
        })



    }, [])

    useEffect(() => {

        switch (state.case) {
            case "DELETEACCOUNT_SUCCESS":
                AsyncStorage.removeItem("userToken")
                Alert.alert(
                    "",
                    state.message,
                    [

                        { text: "OK", onPress: () =>  Actions.reset("Login") }
                    ],
                    { cancelable: false }
                );

               
                dispatch(clearAction())

                break;
            case "DELETEACCOUNT_FAILURE":

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
    const DeletaccountApi = () => {
        setdeletemodal(false)
        dispatch(DeleteAccount(Token))
     
        
       

    }

    return (
        <Container
            backnavigate={() => Actions.Setting()}
            Acountback scrollable Withoutimage header title={Account}>
            <AppView style={{ height: height * 0.08, width: width * 0.83, alignSelf: 'center', top: 10 }}>
                <Touchable onPress={() => Actions.Paymentoption()}>
                    <AppText style={[style.normalText, {

                    }]}>
                        {Payment_option}
                    </AppText>
                </Touchable>
            </AppView>
            <AppView style={{ height: height * 0.08, width: width * 0.83, alignSelf: 'center', top: 10 }}>
                <Touchable onPress={() => Actions.Changepassword()}>
                    <AppText style={[style.normalText, {

                    }]}>
                        {Change_Password}
                    </AppText>
                </Touchable>
            </AppView>
            <AppView style={{ height: height * 0.08, width: width * 0.83, alignSelf: 'center', top: 10 }}>
                <Touchable onPress={() => setdeletemodal(true)}>
                    <AppText style={[style.normalText, {

                    }]}>
                        {Delete_Account}
                    </AppText>
                </Touchable>
            </AppView>
            <Drop_Down_Modal_forall
                visible={deletemodal}
                headertest={Delete_Account}
                textbyown={Deleteaccount_status}
                textno="No"
                textyes="Yes"
                onPressClose={() => setdeletemodal(false)}
                onPressno={() => setdeletemodal(false)}
                onPressyes={() => DeletaccountApi()
                }
            />
        </Container>



    )

}