import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, ImageBackground, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, AppbackgraoundImage, AppImage } from '../../components/atoms';
import { Header, SearchCustom } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { WHITE, light_blue, BLACK, Error_Red } from '../../styles/colors';
import { threedot, bullet, onrepeat, suffleon, playsong, Playlistenbutton, ProfileEDit, Profilebackicon, libraryback, songimage, emtyicon } from '../../assets';
import AlbumArt from '../AudioPlayer/AlbumArt';
import AsyncStorage from '@react-native-community/async-storage';
import musiclibrary from '../../components/musiclibrary';
import { AddSong, clearAction, AddmoreSong, GetDezeersonglist } from '../../Action/Action';
let Token
let GenerateCode
export default Mylibrary = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const [inbuiltstate, setState] =
        useState({
            Playlist: [],
            addstatus: false,
            deezerPlaylist: "",
            deezerstatus: false,
            isrefresh: false,
            songsduration: 0
        });
    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
            }
        })
        AsyncStorage.getItem("GENERATE_CODE").then(async resp => {
            if (JSON.parse(resp) != null) {
                GenerateCode = JSON.parse(resp)

            }
        })
        let totatlduration = 0
        props.Playlistsong == undefined ?
            null :
            props.Playlistsong.map(ele => {
                console.log("duration", ele)
                totatlduration += Number(ele.duration)
            })
        console.log("duration", totatlduration)
        setState({ ...inbuiltstate, Playlist: props.Playlistsong , songsduration:totatlduration/60 ,isrefresh: !inbuiltstate.isrefresh,})

    }, [])

    const songStoreinqueue = (ID) => {
        let addDetails = {
            // generatedCode: GenerateCode,
            // uri: ID.uri,
            // albumArtist: ID.albumArtist == undefined ? "" : ID.albumArtist,
            // name: ID.name,
            // songImage: ID.songImage == undefined ? "" : ID.songImage,
            // duration: ID.duration == undefined ? "" : ID.duration,
            generatedCode: GenerateCode,
            uri: props.titleName == "Deezer" ? ID.preview : ID.uri,
            albumArtist: props.titleName == "Deezer" ? ID.artist.name : ID.albumArtist,
            name: props.titleName == "Deezer" ? ID.album.title : ID.name,
            songImage: props.titleName == "Deezer" ? ID.album.cover_small : props.titleName != "Deezer"&&ID.songImage == undefined ? "" : ID.songImage,
            duration: props.titleName == "Deezer" ? ID.duration :  props.titleName != "Deezer"&&ID.duration == undefined ? 0 : ID.duration,

        }
        dispatch(AddSong(addDetails, Token))
    }
    const addFunc = (ID) => {
        // if ((inbuiltstate.Queuesongsarray.length % 3) == 0) {
        //     setState({ ...inbuiltstate, addstatus: true })
        //     Actions.addPlayer()
        // }
        // else {
        // inbuiltstate.Queuesongsarray.push(ID)
        // setState({ ...inbuiltstate, Queuesongsarray: inbuiltstate.Queuesongsarray })
        Alert.alert(
            "",
            "Are you sure you want to add this song?",
            [
                {
                    text: "NO",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "YES", onPress: () => addMoresong(ID) }
            ],
            { cancelable: false }
        );

    }
    const addMoresong = (ID) => {
        let addDetails = {
            generatedCode: GenerateCode,
            uri: props.titleName == "Deezer" ? ID.preview : ID.uri,
            albumArtist: props.titleName == "Deezer" ? ID.artist.name : ID.albumArtist,
            name: props.titleName == "Deezer" ? ID.album.title : ID.name,
            songImage: props.titleName == "Deezer" ? ID.album.cover_small : props.titleName != "Deezer"&&ID.songImage == undefined ? "" : ID.songImage,
            duration: props.titleName == "Deezer" ? ID.duration :  props.titleName != "Deezer"&&ID.duration == undefined ? 0 : ID.duration,

        }
        dispatch(AddmoreSong(addDetails, Token))
    }
    useEffect(() => {
        switch (state.case) {
            case "ADDSONG_SUCCESS":
                Alert.alert(
                    "",
                    state.message,
                    [

                        { text: "OK", onPress: () => Actions.Musicscreen({ "PageKey": "Leavesessioncaseforhost" }) }
                    ],
                    { cancelable: false }
                );

                dispatch(clearAction())

                break;
            case "ADDSONG_FAILURE":
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
            case "ADDMORESONG_SUCCESS":
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
            case "ADDMORESONG_FAILURE":
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
            case "DEZEERSONGLIST_SUCCESS":
                console.log("deezersonglistt=>>>", state.dezeersonglist)
                let totatlduration = 0
                state.dezeersonglist == undefined ?
                    null :
                    state.dezeersonglist.map(ele => {
                        totatlduration += ele.duration
                    })

                setState({
                    ...inbuiltstate, deezerPlaylist: state.dezeersonglist, isrefresh: !inbuiltstate.isrefresh,
                    deezerstatus: true, songsduration: totatlduration / 60
                })



                dispatch(clearAction())

                break;
            case "DEZEERSONGLIST_FAILURE":
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
    const Play_list = ({ item, }) => {
        return (
            <Touchable onPress={props.Page == "cuemusic" ? () => songStoreinqueue(item) : props.Page == "cuemusictab" ? () => Actions.Hostsession() : () => addFunc(item,)} style={style.unselectedLayout}>
                <AppView style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image
                        resizeMode="contain"
                        style={{ marginHorizontal: 5, width: 70, height: 50, borderRadius: 5, }}
                        source={inbuiltstate.deezerstatus ? { uri: item.album.cover_small } : item.songImage == "" || item.songImage == undefined ? songimage : { uri: item.songImage }} />
                    <AppView>
                        <AppText style={[style.normalText, { fontWeight: "normal", left: 10, fontSize: 16, width: width * 0.5, }]}>
                            {inbuiltstate.deezerstatus ? item.album.title : item.name}
                        </AppText>
                        <AppText style={[style.normalText, { left: 10, width: width * 0.5, }]}>
                            {inbuiltstate.deezerstatus ? item.artist.name : item.albumArtist}
                        </AppText>
                    </AppView>
                </AppView>
                <Touchable onPress={props.Page == "cuemusic" ? () => songStoreinqueue(item) : props.Page == "cuemusictab" ? () => Actions.Hostsession() : () => addFunc(item,)}>
                    <AppImage source={threedot} style={{
                        width: 20, height: 20,
                        right: 10
                    }}>
                    </AppImage>
                </Touchable>
            </Touchable>
        )
    }
    const validateHandle = (text) => {
        let serchSong = text
        dispatch(GetDezeersonglist(serchSong, Token))
    }
    return (
        <AppView style={[style.container, { alignItems: 'flex-start', justifyContent: 'flex-start', }]}>
            <ImageBackground
                resizeMode="stretch"
                style={[style.image, {}]}
                source={libraryback}
            >
                <Header
                    //  backnavigate={props.Page==undefined? props.backnavigate:()=>Actions.pop()}
                    backnavigate={() => Actions.pop()}
                    Profileback />
                <Image 
                style={{ width: 150, height: 150, borderRadius: 75, bottom: 25 }} source={props.clicktype == "librarysec" ? props.mainthumbnail : { uri: props.mainthumbnail }} />
                <AppText style={[style.normalText, { color: BLACK, bottom: 20, fontSize: 15, fontWeight: "bold" }]} >
                    {props.titleName}
                </AppText>
                <AppText style={[style.normalText, { color: Error_Red, bottom: 18, fontSize: 15, fontWeight: "bold" }]}>
                    {inbuiltstate.deezerstatus && inbuiltstate.deezerPlaylist != undefined ?
                        inbuiltstate.deezerPlaylist.length :
                        inbuiltstate.deezerstatus == true && inbuiltstate.deezerPlaylist == undefined ? "0" :
                            inbuiltstate.Playlist == undefined ? "0" : inbuiltstate.Playlist.length}
                    {inbuiltstate.Playlist == undefined ? "" : inbuiltstate.Playlist.length > 1 ? "songs" : "Song"}
                    + {inbuiltstate.songsduration.toFixed(2)} {inbuiltstate.songsduration > 1 ? "mins" : "min"}
                </AppText>
                {/* {/* <Header  /> */}
            </ImageBackground>
            {/* <AppView
                style={{
                    width: width,
                    alignSelf: "center",
                    alignItems: 'center',
                }}> */}
            <AppView style={{ width: width * 0.88, alignItems: "center", justifyContent: 'center', alignSelf: 'center', }}>
                <Image resizeMode="contain" style={{
                    width: 70,
                    height: 50,
                    bottom: 30
                }} source={Playlistenbutton} />
            </AppView>
            {/* </AppView> */}
            <AppView style={{
                width: width * 0.85,
                alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', bottom: 20
            }}>
                <Touchable>
                    <AppText style={[style.normalText, { fontWeight: "bold", fontSize: 16, }]}>
                        Playlist
    </AppText>
                </Touchable>
                <AppView style={{ flexDirection: 'row', }}>
                    {
                        props.titleName=="Deezer"?
                        <SearchCustom
                        onChangeText={(text) => validateHandle(text)}
                        Searchlayout={{ width: width * 0.65, bottom: 20 }} SearchInputlayout={{ width: width * 0.6 }} />
                        :
                        null
                    }
                  
                
                </AppView>
            </AppView>
            <AppView style={{
                flex: 1,
                // bottom: props.Page==undefined?30:null,
                // height: height <=736 && props.Page==undefined?height * 0.39:height <=736 && props.Page!=undefined?height * 0.45:height * 0.37,
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: WHITE,
            }}>
                {props.titleName == "Deezer" && inbuiltstate.deezerstatus == false ?
                    <AppView>
                        <AppText style={style.normalText}>
                            Please search to see the song list!
                    </AppText>
                    </AppView>
                    // :
                    //     inbuiltstate.Playlist.length === 0 ||inbuiltstate.deezerPlaylist.length===0||inbuiltstate.deezerPlaylist==undefined||inbuiltstate.Playlist==undefined?
                    //         <AppImage source={emtyicon} />

                    :
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={inbuiltstate.deezerstatus ? inbuiltstate.deezerPlaylist : inbuiltstate.Playlist}
                        renderItem={(item, index) => Play_list(item,)}
                        keyExtractor={item => item.id}
                        extraData={inbuiltstate.isrefresh}
                    />
                }
            </AppView>
        </AppView>
    )
}

