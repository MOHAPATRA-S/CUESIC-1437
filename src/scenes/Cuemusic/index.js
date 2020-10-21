import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, ImageBackground, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, AppbackgraoundImage, AppImage } from '../../components/atoms';
import { Header, SearchCustom } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import { Recently_played, Mylibrarylist, playlist_now, Popular_now } from "../../components/commomList"
import { Actions } from 'react-native-router-flux';
import { WHITE, light_blue } from '../../styles/colors';
import { magnifier, emtyicon, songimage, havana, googlemusic } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import { Getplaylist, clearAction, AddSong, AddmoreSong, Recentlyplayed, GetUserLinkApp } from '../../Action/Action';
import DocumentPicker from 'react-native-document-picker';
let Token
let GenerateCode
export default Cuemusic = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const { Cue_Music,
    } = state.language
    const [inbuiltstate, setState] =
        useState({
            Queuesongsarray: "",
            cueplaylist: "",
            addstatus: false,
            cuerecentpaylist: "",
            musiclibrarylist:""

        });

    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
                dispatch(GetUserLinkApp(Token))
                dispatch(Getplaylist(Token))
                dispatch(Recentlyplayed(Token))
            }
        })
        AsyncStorage.getItem("GENERATE_CODE").then(async resp => {
            if (JSON.parse(resp) != null) {

                GenerateCode = JSON.parse(resp)

            }
        })
    }, [])
    useEffect(() => {
        switch (state.case) {
            case "GETPLAYLIST_SUCCESS":
                setState({
                    ...inbuiltstate,
                    cueplaylist: state.getplaylist,
                    // cuerecentpaylist:state.getplaylist[state.getplaylist.length-1].songs
                })
                dispatch(clearAction())
                break;
            case "GETPLAYLIST_FAILURE":
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
            case "RECENTLYPLAYED_SUCCESS":

                setState({
                    ...inbuiltstate,
                    cuerecentpaylist: state.recentlyplayed.length > 0 ? state.recentlyplayed[0].songs : []
                })
                dispatch(clearAction())
                break;
            case "RECENTLYPLAYED_FAILURE":
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
            case "GETAPPLINKHISTORY_SUCCESS":
                let localstorageapp = {
                    type: 'Local Storage',
                    libraryimage: havana

                }
                let removeduplicacy = Array.from(state.userapplinklist.linkedApp.reduce((a, o) => a.set(o.type, o), new Map()).values());    
                removeduplicacy.push(localstorageapp)
                setState({ ...inbuiltstate, musiclibrarylist: removeduplicacy })
               
                dispatch(clearAction())
                break;

            case "LIMIT_SUCCESS":
                Actions.addPlayer({ "advertiseDetails": state.advertiseDetails })
                dispatch(clearAction())
                break;
        }

    }, [state])
    const openDocumentPicker = async () => {

        try {
            const results = await DocumentPicker.pick({
                type: [DocumentPicker.types.audio],
                readContent: true
            });

            addFunc(results)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }
    const opencueDocumentPicker = async () => {

        try {
            const results = await DocumentPicker.pick({
                type: [DocumentPicker.types.audio],
                readContent: true
            });

            songStoreinqueue(results)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }
    const songStoreinqueue = (ID) => {
        let addDetails = {
            generatedCode: GenerateCode,
            uri: ID.uri,
            albumArtist: ID.albumArtist == undefined ? "" : ID.albumArtist,
            name: ID.name,
            songImage: ID.songImage == undefined ? "" : ID.songImage,
            duration: ID.duration == undefined ? "" : ID.duration,
        }

        dispatch(AddSong(addDetails, Token))
    }
    const addFunc = (ID) => {

       
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
            uri: ID.uri,
            albumArtist: ID.albumArtist == undefined ? "" : ID.albumArtist,
            name: ID.name,
            songImage: ID.songImage == undefined ? "" : ID.songImage,
            duration: ID.duration == undefined ? "" : ID.duration,
        }
        dispatch(AddmoreSong(addDetails, Token))
    }
    const Recently_played_list = ({ item, }) => {
        return (
            <Touchable onPress={props.Page == "musicscreen" ? () => addFunc(item) : () => songStoreinqueue(item)
            }>
                <AppView style={style.unselectedLayout}>
                    <Image
                        resizeMode="contain"
                        style={{ width: width * 0.35, height: 80, borderRadius: 10, }}
                        source={item.songImage ? { uri: item.songImage } : songimage} />

                    <AppText style={[style.normalText, { fontWeight: "normal", top: 2, fontSize: 14, textAlign: 'center' }]}>
                        {item.name}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }
    const Myplaylist_list = ({ item }) => {
        return (
            <Touchable onPress={props.Page == "musicscreen" ?
                () => Actions.Mylibrary({ "Page": "musicscreen", "clicktype": "paylist", "titleName": item.playlistName, "mainthumbnail": item.thumbnail, "Playlistsong": item.songs, })
                : () => Actions.Mylibrary({ "Page": "cuemusic", "clicktype": "paylist", "titleName": item.playlistName, "mainthumbnail": item.thumbnail, "Playlistsong": item.songs, })}>
                <AppView style={style.unselectedLayout}>
                    <Image
                        resizeMode="contain"
                        style={{ width: width * 0.35, height: 80, borderRadius: 10, }}
                        source={{ uri: item.thumbnail }} />

                    <AppText style={[style.normalText, { fontWeight: "normal", top: 2, fontSize: 14, textAlign: 'center' }]}>
                        {item.playlistName}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }
    const Mylibrary_list = ({ item, }) => {
        return (

            <Touchable onPress={props.Page == "musicscreen" && item.type == "Local Storage" ? () => openDocumentPicker() : props.Page == "musicscreen" && item.type != "Local Storage" ?
                () => Actions.Mylibrary({ "Page": "musicscreen", "clicktype": "librarysec", "titleName": item.type, "mainthumbnail": item.libraryimage })
                : props.Page != "musicscreen" && item.type == "Local Storage" ? () => opencueDocumentPicker() :

                    () => Actions.Mylibrary({ "Page": "cuemusic", "clicktype": "librarysec", "titleName": item.type, "mainthumbnail": item.libraryimage })}>
                <AppView style={[style.unselectedLayout, {
                     alignItems: 'center',
                    alignSelf: 'center',
                    width: width * 0.45,margin: 5,
                }]}>
                    <Image
                    resizeMode="cover"
                        style={{ width: 180, height: 100, borderRadius: 10, }}
                        source={item.type== "Local Storage" ?havana:googlemusic} />

                    <AppText style={[style.normalText, { width: width * 0.4, fontWeight: "normal", marginVertical: 2, fontSize: 14, textAlign: 'center' }]}>
                        {item.type}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }

    return (
        <Container scrollable croosback Withoutimage header={true} title={Cue_Music}
            right_second={magnifier}
            right_secondclik={() => setState({ ...inbuiltstate, searchstatus: !inbuiltstate.searchstatus })}
            backnavigate={() => Actions.pop()}
        // props.Page == "musicscreen" ? () => Actions.pop() : () => Actions.pop()}
        >
            {inbuiltstate.searchstatus ?
                <SearchCustom />
                :
                null
            }
            <AppView style={{
                // height:props.Page=="musicscreen"? height * 0.18:height*0.2,
                width,
                alignItems: 'flex-start',
                alignSelf: 'center',
                justifyContent: 'center',

            }}>
                <AppText style={[style.normalText, {
                    fontWeight: "bold", width: width * 0.9, alignSelf: 'center', textAlign: "left", marginTop: props.Page == "musicscreen" ? 5 : 10, right: 5
                }]}>
                    Recently played
                            </AppText>

                {
                    inbuiltstate.cuerecentpaylist.length === 0 ?

                        <AppView style={{
                            width,
                            alignItems: 'center',
                        }}>
                            <AppImage source={emtyicon} />
                        </AppView>
                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={inbuiltstate.cuerecentpaylist}
                            renderItem={(item, index) => Recently_played_list(item,)}
                        />

                }
            </AppView>

            <AppView style={{
                // height: props.Page=="musicscreen"? height * 0.18:height*0.2,
                width,
                alignItems: 'flex-start',
                alignSelf: 'center',
                justifyContent: 'center',


            }}>
                <AppText style={[style.normalText, {
                    fontWeight: "bold", width: width * 0.9, alignSelf: 'center', textAlign: "left", marginTop: props.Page == "musicscreen" ? 5 : 10, right: 5
                }]}>
                    My  Playlist
                            </AppText>
                {
                    inbuiltstate.cueplaylist.length === 0 ?

                        <AppView style={{
                            width,
                            alignItems: 'center',
                        }}>

                            <AppImage source={emtyicon} />
                        </AppView>
                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={inbuiltstate.cueplaylist}
                            renderItem={(item, index) => Myplaylist_list(item,)}


                        />

                }
            </AppView>

            <AppView style={{
                flex: 1,
                width,
                alignItems: 'flex-start',
                alignSelf: 'center',
                justifyContent: 'center',


            }}>
                <AppView style={{ width: width * 0.9, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <AppText style={[style.normalText, {
                        fontWeight: "bold", textAlign: "left", right: 8, marginTop: 10,
                    }]}>
                        Music Library
                            </AppText>

                </AppView>

                {
                    Mylibrarylist.length === 0 ?

                        <AppView style={{
                            width,
                            alignItems: 'center',
                        }}>
                            <AppImage source={emtyicon} />
                        </AppView>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            data={inbuiltstate.musiclibrarylist}
                            renderItem={(item, index) => Mylibrary_list(item,)}

                            numColumns={2}
                        />

                }
            </AppView>

        </Container>
    )
}