
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Platform } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { halfbackground, cuejams, blackcross } from '../../assets';
import { Input, CustomButton } from '../../components/molecules';
import { WHITE, DarkGrey, GRAY } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { handleValidations } from './validate';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';

export default Addnewcard = (props) => {
    const state = useSelector(state => state).reducer;
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
          

        });
    // const handlevalidate = async (text, type) => {
    //     let status = `${type}Status`;
    //     let errorText = `${type}Error`;
    //     let resp = handleValidations(text, type)
    //     await setState({
    //         ...inbuiltstate,
    //         [type]: resp.value,
    //         [errorText]: resp.errorText,
    //         [status]: resp.status,
    //     })

    // }
    // const Submit = () => {

    //     if (inbuiltstate.oldpasswordStatus) {
    //         if (inbuiltstate.passwordStatus) {
    //             if (inbuiltstate.confirmpasswordStatus) {
    //                 Actions.Setting()
    //             }
    //             else { setState({ ...inbuiltstate, confirmpasswordstatus: false, confirmpasswordError: confirmpassword_error, }) }
    //         }
    //         else { setState({ ...inbuiltstate, passwordstatus: false, passwordError: new_Password_error, }) }


    //     }
    //     else { setState({ ...inbuiltstate, oldpasswordStatus: false, oldpasswordError: old_Password_error, }) }

    // }

    return (
        <Container 
        
        backnavigate={()=>Actions.pop()}
        scrollable Withoutimage header title={Add_New_Card}>
            <AppView style={{ marginTop: 50, }}>
                <Input
                    placeholder={Name_of_card}
                    textInput={{ width: wp("80%") }}
                    
                   
                    // onChangeText={(text) => handlevalidate(text)}
                    errortext={inbuiltstate.oldpasswordError}

                />
                <Input
                    placeholder={Card_Number}
                    textInput={{ width: wp("80%") }}
                    maxLength={16}
                   
                    // onChangeText={(text) => handlevalidate(text, )}
                    errortext={inbuiltstate.passwordError}

                />
                <AppView style={{width: wp("85%") ,
                flexDirection: 'row',
                alignSelf: 'center',alignItems: 'center',justifyContent: 'space-between',
                height:hp("9%")

            }}>
                    <TextInput
                        style={{ 
                            width: wp("38%"),
                             height: hp("6%"),
                             borderWidth: 0.5,
                             borderColor: GRAY,
                             borderRadius: 30,
                             paddingLeft:10
                             }}
                        placeholder={MM}
                        maxLength={5}
                        // textInput={{ width: wp("15%"),backgroundColor: "yellow", }}
                        // secure
                        // value={inbuiltstate.confirmpassword}
                        // onChangeText={(text) => handlevalidate(text,)}
                        // errortext={inbuiltstate.confirmpasswordError}

                    />
                    <TextInput
                        style={{ 
                            width: wp("38%"),
                            borderWidth: 0.5,
                            borderColor: GRAY,
                            borderRadius: 30,
                            height: hp("6%"),
                            paddingLeft:10
                         }}
                        placeholder={CVV}
                        // textInput={{ width: wp("15%") ,backgroundColor: "yellow",}}
                        secureTextEntry
                        maxLength={3}
                        // value={inbuiltstate.confirmpassword}
                        // onChangeText={(text) => handlevalidate(text,)}
                        // errortext={inbuiltstate.confirmpasswordError}

                    />
                </AppView>

            </AppView>
            <AppView style={{ marginTop: 30, }}>
                <CustomButton
                    onPress={() => Actions.Paymentoption()}

                    buttonText={Save}
                    textstyle={[style.normalText, { fontSize: 22, color: WHITE }]}

                />
            </AppView>





        </Container>






    )

}