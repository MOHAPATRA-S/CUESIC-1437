import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Platform,Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { halfbackground, cuejams, blackcross } from '../../assets';
import { Input, CustomButton } from '../../components/molecules';
import { WHITE, DarkGrey, GRAY, BLACK, Light_gray } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { handleValidations } from './validate';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { AddNewcard ,clearAction} from '../../Action/Action';
let Token
export default Addnewcard = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch=useDispatch()
    const { MM,
        old_Password_error,
        Add_New_Card,
        Save,
        Name_of_card,
        Card_Number,
        CVV,
        confirmpassword_error,
        new_Password_error
    } = state.language

    let [inbuiltstate, setState] =
        useState({
            nameofcard:"",
            nameofcardStatus:false,
            nameofcardError:"",
            cardnumber:"",
            cardnumberStatus:false,
            cardnumberError:"",
            cvv:"",
            cvvStatus:false,
            cvvError:"",
            expiredate:"",
            expiredateStatus:false,
            expiredateError:""
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

        if (inbuiltstate.nameofcardStatus) {
            if (inbuiltstate.cardnumberStatus) {
                if (inbuiltstate.expiredateStatus) {
               let carddetails={
                cardName:inbuiltstate.nameofcard,
                cardNumber :inbuiltstate.cardnumber,
                expMonthYear:inbuiltstate.expiredate,
               
               }
               dispatch(AddNewcard(carddetails,Token))
        
                }
                else { setState({ ...inbuiltstate, expiredatestatus: false, expiredatedError: 'Please enter expire date.', }) }
                
            }
            else { setState({ ...inbuiltstate, cardnumberStatus: false, cardnumberError: "Please enter card number.", }) }

        }
        else { setState({ ...inbuiltstate, nameofcardStatus: false, nameofcardError: 'Please enter name of card.', }) }

    }
    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
             
                Token=JSON.parse(resp)

            }
        })
        
    }, [])
    useEffect(() => {

        switch (state.case) {
            case "ADDNEWCARD_SUCCESS":
                Alert.alert(
                    "",
                    state.message,
                    [
    
                        { text: "OK", onPress: () =>  Actions.Paymentoption({"page":props.page=="add"?"addback":"onlyback"}) }
                    ],
                    { cancelable: false }
                );
                dispatch(clearAction())

                break;
            case "ADDNEWCARD_FAILURE":

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
        
        backnavigate={()=>Actions.pop()}
        scrollable Withoutimage header title={Add_New_Card}>
            <AppView style={{ marginTop: 50, }}>
                <Input
                    placeholder={Name_of_card}
                    textInput={{ width: wp("80%") }}
                    maxLength={30}
                   value={inbuiltstate.nameofcard}
                    onChangeText={(text) => handlevalidate(text,"nameofcard")}
                    errortext={inbuiltstate.nameofcardError}

                />
                <Input
                    placeholder={Card_Number}
                    textInput={{ width: wp("80%") }}
                    maxLength={16}
                   
                    onChangeText={(text) => handlevalidate(text,"cardnumber" )}
                    errortext={inbuiltstate.cardnumberError}

                />
                <AppView style={{width: wp("85%") ,
                flexDirection: 'row',
                alignSelf: 'center',alignItems: 'center',justifyContent: 'space-between',
                // height:hp("9%")

            }}>
                    <AppView style={{ height: hp("9%"), width: wp("40%"),  }}>
                        <TextInput
                            style={{
                                width: wp("38%"),
                                height: hp("6%"),
                                borderWidth: 0.5,
                                borderColor: GRAY,
                                borderRadius: 30,
                                paddingLeft: 10,
                                color: BLACK
                            }}
                            placeholder={MM}
                            maxLength={5}
                            placeholderTextColor={Light_gray}
                            onChangeText={(text) => handlevalidate(text, "expiredate")}
                       

                        />
                        <AppView style={[style.ErrorLayout,]}>
                            <AppText style={style.Errortextstyle}>
                                {inbuiltstate.expiredateError}
                            </AppText>
                        </AppView>
                    </AppView>
                    <AppView style={{ height: hp("9%"), width: wp("40%"),  }}>
                   
                    </AppView>
                </AppView>

            </AppView>
            <AppView style={{ marginTop: 30, }}>
                <CustomButton
                    onPress={() => Submit()}

                    buttonText={Save}
                    textstyle={[style.normalText, { fontSize: 22, color: WHITE }]}

                />
            </AppView>
        </Container>

    )

}