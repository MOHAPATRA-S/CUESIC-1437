import React, { useState, useEffect } from 'react';
import { Dimensions, Image, Platform, ImageBackground, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { profile, camara, ProfileEDit, edit, backcover, Account_icon } from '../../assets';
import { Input, Header } from '../../components/molecules';
import { WHITE, DarkGrey, light_blue } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';
import { Getprofile, clearAction, Editprofile } from '../../Action/Action';
import AsyncStorage from '@react-native-community/async-storage';
let Token
export default Profile = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const {
        Profile,
        Statistics,
        Sessions_Hosted,
        Hours_Played,
    } = state.language
    let [inbuiltstate, setState] =
        useState({
            imagepath: "",
            coverpath: "",
            username: "",
            sessionHosted:"",
            hoursPlayed:""
        });
    const openImage = (type) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64: true,
            cropping: true
        }).then(async (image) => {
            if (type == "profilechange") {
                let profileimage = `data:image/gif;base64,${image.data}`
                await setState({ ...inbuiltstate, imagepath: profileimage, })
                let editdetails = {
                    profilePic: profileimage
                }
                dispatch(Editprofile(editdetails, Token))
            }
            else {
                let coverimage = `data:image/gif;base64,${image.data}`
                setState({ ...inbuiltstate, coverpath: coverimage })
                let coverdetails = {
                    coverPhoto: coverimage
                }
                dispatch(Editprofile(coverdetails, Token))
            }
        });
    }
    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
                dispatch(Getprofile(Token))
            }
        })
    }, [])
    useEffect(() => {
        switch (state.case) {
            case "GETPROFILE_SUCCESS":
                setState({
                    ...inbuiltstate,
                    imagepath: state.getprofileDetail.profilePic != undefined ? state.getprofileDetail.profilePic : "",
                    coverpath: state.getprofileDetail.coverPhoto != undefined ? state.getprofileDetail.coverPhoto : "",
                    username: state.getprofileDetail.name,
                    sessionHosted:state.getprofileDetail.sessionHosted,
                    hoursPlayed: state.getprofileDetail.hoursPlayed != undefined ? state.getprofileDetail.hoursPlayed : 0

                })
                dispatch(clearAction())
                break;
            case "GETPROFILE_FAILURE":
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
            case "EDITPROFILE_SUCCESS":
                Alert.alert(
                    "",
                    state.message,
                    [

                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );

                dispatch(clearAction())
                dispatch(Getprofile(Token))
                break;
            case "EDITPROFILE_FAILURE":

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
        <AppView style={style.defaultContainer}>
            <ImageBackground resizeMode="stretch" style={{
                height: height * 0.5,
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'space-between',
            }} source={inbuiltstate.coverpath ? { uri: inbuiltstate.coverpath } : backcover}>
                <Header Profileback
                    backnavigate={() => Actions.pop()}
                    right_second={edit}
                    right_secondclik={() => openImage("coverchange")}
                    title={Profile}
                />
            </ImageBackground>
            <AppView style={style.whiteBack}>
                <AppView style={{ bottom: 50, width: width * 0.88, alignItems: "flex-start", justifyContent: 'flex-start', alignSelf: 'center', }}>
                    <Image style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        position: "absolute",

                    }} source={inbuiltstate.imagepath ? { uri: inbuiltstate.imagepath } : ProfileEDit} />
                    <Touchable onPress={() => openImage("profilechange")}>
                        <AppImage style={{
                            width: 50,
                            height: 50,
                            marginTop: 60,
                            zIndex: 2,
                            marginLeft: 50,
                        }} source={camara} />
                    </Touchable>
                    <AppText style={[style.normalText, { color: light_blue, fontSize: 25, left: 8 }]}>
                        {inbuiltstate.username}
                    </AppText>
                </AppView>

                <AppView style={{ width: width * 0.88, alignItems: "flex-start", justifyContent: 'center', alignSelf: 'center', }}>
                    <AppText style={[style.normalText, { fontSize: 20, }]}>
                        {Statistics}
                    </AppText>
                    <AppView style={{
                        marginTop: 10,
                        width: width * 0.88,
                        alignItems: "flex-start",
                        justifyContent: 'space-between',
                        alignSelf: 'center',

                        flexDirection: 'row',
                    }} >
                        <AppText style={[style.normalText, { fontSize: 16, fontWeight: 'normal', }]}>
                            {Sessions_Hosted}
                        </AppText>
                        <AppText style={[style.normalText, { fontSize: 16, fontWeight: 'normal', }]}>
                           {inbuiltstate.sessionHosted}
                            </AppText>
                    </AppView>
                    <AppView style={{
                        width: width * 0.88,
                        alignItems: "flex-start",
                        justifyContent: 'space-between',
                        alignSelf: 'center',

                        flexDirection: 'row',
                        marginTop: 10,
                    }} >
                        <AppText style={[style.normalText, { fontSize: 16, fontWeight: 'normal', }]}>
                            {Hours_Played}
                        </AppText>
                        <AppText style={[style.normalText, { fontSize: 16, fontWeight: 'normal', }]}>
                            {inbuiltstate.hoursPlayed}
                            </AppText>
                    </AppView>
                </AppView>
            </AppView>
        </AppView>
    )

}

