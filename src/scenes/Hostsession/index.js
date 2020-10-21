
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground,Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { Input, CustomButton } from '../../components/molecules';
import { graybutton, copy, barcode } from '../../assets';
import { GenerateCode, clearAction, Savesessiondetails } from '../../Action/Action';
import Clipboard from '@react-native-community/clipboard'
import AsyncStorage from '@react-native-community/async-storage';
import { normalizeFont } from '../../styles/responsive';
let Token
export default Hostsession = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const {

        firstname_error,
        Setting_up_your_party,
        Generated_Code,
        Your_party_name,
        Name_your_party,
        Invite_Friends_Continue
    } = state.language
    let [Remeberme, setRemeberme] = useState(false);
    let [inbuiltstate, setState] =
        useState({
            radiostation: "",
            Linkmodal: false,
            name: "",
            nameError: "",
            nameStatus: false,
            Generatecode: "",
            barImage: "",
            generateCodeStatus: false

        });
    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {


                Token = JSON.parse(resp)



            }
        })
    }, [])
    const handlevalidate = (text) => {

        if (text == "") {
            setState({
                ...inbuiltstate,

                name: "",
                nameStatus: false,
                nameError: firstname_error,
            })
        }
        else if (text.length < 2) {
            setState({
                ...inbuiltstate,

                name: "",
                nameStatus: false,
                nameError: 'Minimum length should be two.',
            })

        }
        else {
            setState({
                ...inbuiltstate,

                name: text,
                nameStatus: true,
                nameError: "",
            })
        }

    }
    const Submit = () => {
        if (inbuiltstate.nameStatus) {
            let savedeatils = {

                partyName: inbuiltstate.name,
                generatedCode: inbuiltstate.Generatecode
            }
            dispatch(Savesessiondetails(savedeatils, Token))

        }

        else { setState({ ...inbuiltstate, namestatus: false, nameError: firstname_error, }) }
    }

    useEffect(() => {

        switch (state.case) {
            case "GENERATECODE_SUCCESS":

                setState({
                    ...inbuiltstate,
                    Generatecode: state.generatecodedetails.generateCode,
                    barImage: state.generatecodedetails.barCode,
                    generateCodeStatus: true
                    // numberofsession
                    // hoursplayed:


                })
                dispatch(clearAction())

                break;
            case "GENERATECODE_FAILURE":

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
            case "SAVESESSIONDETAILS_SUCCESS":

                Actions.InviteFriends({
                    "generatecode": inbuiltstate.Generatecode,
                    "partyname": inbuiltstate.name
                })
                AsyncStorage.setItem("GENERATE_CODE",JSON.stringify(inbuiltstate.Generatecode))

                dispatch(clearAction())

                break;
            case "SAVESESSIONDETAILS_FAILURE":

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
            scrollable Withoutimage header>

            <AppView style={style.firstcontainer}>
                <AppText style={[style.normalText, { marginTop: 15, fontSize: 20, }]}>
                    {Setting_up_your_party}
                </AppText>
            </AppView>

            <Touchable onPress={() => dispatch(GenerateCode())}>
                <ImageBackground resizeMode="contain" style={{
                    width: width * 0.85,
                    height: height * 0.1,
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 10
                }} source={graybutton}>
                    <AppText style={[style.normalText, { fontSize: 18, color: BLACK }]}>
                        {Generated_Code}
                    </AppText>
                </ImageBackground >
            </Touchable>

            <AppView style={{
                flexDirection: 'row',
                width: width * 0.5,
                alignItems: "center",
                justifyContent: "space-evenly",
                alignSelf: "center",
                marginTop: 10,
            }}>
                <AppText style={[style.normalText, { marginLeft: 40, fontSize: normalizeFont(30), fontWeight: "bold" }]} >
                    {inbuiltstate.Generatecode}
                
                </AppText>
                <Touchable onPress={() => Clipboard.setString(inbuiltstate.Generatecode)}>
                    <AppImage style={[style.smallimage, { left: 20 }]} source={copy} />
                </Touchable>
            </AppView>

            <AppImage style={{
                width: width * 0.7, alignSelf: "center",
                height: 90,
                top: 10,
            }}
            resizeMode="contain"
                // source={inbuiltstate.barImage?{uri:inbuiltstate.barImage}:barcode}
                source={inbuiltstate.barImage ? { uri: inbuiltstate.barImage } : ""}
            />


            <AppView style={{
                top: 40,
                height: height * 0.15,
                alignSelf: 'center',
                alignItems: 'flex-start',
                // justifyContent: 'center',
            }}>
                <AppText style={[style.normalText, { fontSize: 18, }]}>
                    {Name_your_party}
                </AppText>
                <Input
                    placeholder={Your_party_name}

                    Errorstyle={{ width: width * 0.75, }}
                    onChangeText={(text) => handlevalidate(text,)}
                    style={{
                        borderRadius: 0,
                        width: width * 0.75,
                        borderColor: GRAY,
                        marginTop: 10,

                    }}
                    textInput={{ width: width * 0.7, }}

                    errortext={inbuiltstate.nameError}
                />


            </AppView>
            <AppView style={{
                top: 40,
                height: height * 0.15,

                alignItems: 'center',
                // justifyContent: 'center',
            }} >
                <CustomButton
                    onPress={() => Submit()}
                    disabled={inbuiltstate.generateCodeStatus ? false : true}
                    buttonText={Invite_Friends_Continue}
                    textstyle={[style.normalText, { fontSize: 20, color: WHITE, fontWeight: "bold" }]}

                />
            </AppView>

        </Container>



    )

}