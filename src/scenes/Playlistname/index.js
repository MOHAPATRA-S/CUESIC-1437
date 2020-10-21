import React, { useState, useRef, useEffect, } from 'react';
import { FlatList, Dimensions, ImageBackground, Image, Alert } from 'react-native';
import { useSelector, useDispatch, } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, AppbackgraoundImage, AppImage } from '../../components/atoms';
import { Header, Fixcomponent } from '../../components/molecules/index';
const { height, width } = Dimensions.get('window');

import { Actions } from 'react-native-router-flux';
import { WHITE, light_blue } from '../../styles/colors';
import { threedot, bullet, queimage, songimage, emtyicon } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import { GetQueuelist, clearAction, RemoveSong } from '../../Action/Action';

let Token
let GenerateCode
export default Playlistname = (props) => {

    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const { My_Playlist
    } = state.language

    const [inbuiltstate, setState] =
        useState({
            Playlist: "",
            songsduration: 0
        });

    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
                AsyncStorage.getItem("GENERATE_CODE").then(async resp => {
                    if (JSON.parse(resp) != null) {

                        GenerateCode = JSON.parse(resp)
                        let queueDetails = {
                            generatedCode: GenerateCode
                        }

                        dispatch(GetQueuelist(queueDetails, Token))
                    }
                })
            }
        })

    }, [])
    const removeSong = (ID) => {
        Alert.alert(
            "",
            "Are you sure you want to remove this song from queue?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => removeApi(ID) }
            ],
            { cancelable: false }
        );
    }
    const removeApi = (ID) => {

        let removeDetails = {
            generatedCode: GenerateCode,
            _id: ID._id

        }

        dispatch(RemoveSong(removeDetails, Token))
    }
    useEffect(() => {
        switch (state.case) {
            case "GETQUEUELIST_SUCCESS":


                let totatlduration = 0
                state.queueDetails.map(ele => {
                    totatlduration += Number(ele.duration)
                })
                setState({ ...inbuiltstate, Playlist: state.queueDetails, songsduration: totatlduration / 60 })


                dispatch(clearAction())

                break;
            case "GETQUEUELIST_FAILURE":

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
            case "REMOVESONG_SUCCESS":

                let queueDetails = {
                    generatedCode: GenerateCode
                }
                dispatch(GetQueuelist(queueDetails, Token))
                dispatch(clearAction())

                break;
            case "REMOVESONG_FAILURE":

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
    // inbuiltstate.Playlist[0].songImage ? { uri: inbuiltstate.Playlist[0].songImage } :
    const Play_list = ({ item, }) => {

        return (
            <AppView>
                <AppView style={style.unselectedLayout}>
                    <AppView style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{ marginHorizontal: 5, width: 70, height: 50, borderRadius: 5, }}
                            source={item.songImage ? { uri: item.songImage } : songimage} />
                        <AppView>
                            <AppText style={[style.normalText, { fontWeight: "normal", left: 10, fontSize: 16, width: width * 0.5, }]}>
                                {item.name}
                            </AppText>
                            <AppText style={[style.normalText, { left: 10 }]}>
                                {item.albumArtist}
                            </AppText>
                        </AppView>

                    </AppView>

                    <Touchable onPress={() => removeSong(item)}>
                        <AppImage source={threedot} style={{
                            width: 20, height: 20,
                            right: 10
                        }}>

                        </AppImage>

                    </Touchable>
                </AppView>

            </AppView>

        )
    }
    return (
        <AppView style={style.defaultContainer}>
            <AppView style={[style.defaultContainer,]}>

                <AppbackgraoundImage resizeMode="contain" style={{
                    height: height * 0.4,
                    width,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                }} source={inbuiltstate.Playlist == "" ? queimage : { uri: inbuiltstate.Playlist[0].songImage }}>
                    <Header backcrossicon
                        backnavigate={() => Actions.pop()}
                        title={"Queue"}
                    />
                    <AppView style={{
                        height: height * 0.15,
                        width: width * 0.85,
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                    }}>
                        <AppView>
                            <AppText style={[style.normalText, { fontWeight: 'bold', fontSize: 23, color: WHITE }]}>
                                {inbuiltstate.Playlist == "" ? "" : inbuiltstate.Playlist[0].name}

                            </AppText>
                            <AppText style={[style.normalText, { fontWeight: 'normal', fontSize: 15, color: WHITE }]}>
                                {inbuiltstate.Playlist == "" ? "" : inbuiltstate.Playlist[0].albumArtist}

                            </AppText>
                        </AppView>
                        <AppView style={{
                            width: width * 0.85,
                            flexDirection: 'row',
                            alignSelf: 'center',
                        }}>
                            <AppText style={[style.normalText, { fontWeight: 'bold', fontSize: 17 }]}>
                                In Queue
                        </AppText>
                            <AppImage style={{
                                width: 12,
                                height: 12,
                                marginTop: 6,
                                marginHorizontal: 5,
                            }} source={bullet} />
                            <AppText style={[style.normalText, { fontWeight: 'bold', fontSize: 17, color: light_blue }]}>
                                {inbuiltstate.Playlist.length} {inbuiltstate.Playlist.length > 1 ? "songs" : "song"}
                            </AppText>
                            <AppImage style={{
                                width: 12,
                                height: 12,
                                marginTop: 6,
                                marginHorizontal: 5,
                            }} source={bullet} />
                            <AppText style={[style.normalText, { fontWeight: 'bold', fontSize: 17, color: light_blue }]}>
                                {inbuiltstate.songsduration.toFixed(2)}
                            </AppText>
                        </AppView>
                    </AppView>
                </AppbackgraoundImage>
                <AppView style={{
                    flex: 1,
                    // height:height <=736?height * 0.48: height * 0.45,
                    width,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: "white",
                }}>
                    {
                        inbuiltstate.Playlist.length === 0 ?
                            <AppImage source={emtyicon} />
                            :
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={inbuiltstate.Playlist}
                                renderItem={(item, index) => Play_list(item,)}
                                keyExtractor={item => item.id}

                            />

                    }
                    {/* <AppImage style={{backgroundColor: "yellow",width:20,height:20}} source={endmenu
                    }/> */}

                    {/* <Fixcomponent
                        onPressfix={props.navigatecuemusic}
                    /> */}
                </AppView>
            </AppView>

        </AppView >
    )
}