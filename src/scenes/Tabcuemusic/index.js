import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, ImageBackground, Image, DeviceEventEmitter, Platform,PermissionsAndroid,Alert } from 'react-native';
import { useSelector,useDispatch } from "react-redux"
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
import { Getplaylist,clearAction, Recentlyplayed,GetUserLinkApp } from '../../Action/Action';
let Token
import DocumentPicker from 'react-native-document-picker';
export default Tabcuemusic = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch =useDispatch()
    const { Cue_Music,
    } = state.language;
    const [inbuiltstate, setState] =
        useState({
            searchstatus:false,
            cueplaylist:"",
            cuerecentpaylist:"",
            musiclibrarylist:""
        });
    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE],
                {}
            );
            if (
                granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
                return true;
            }
            return false;
        } catch (err) {
            return false;
        }
    };

    useEffect(() => {
        requestStoragePermission()
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
                dispatch(GetUserLinkApp(Token))

                dispatch(Getplaylist(Token))
                dispatch(Recentlyplayed(Token))
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
                // console.log("cuerecentpaylist",state.getplaylist[state.getplaylist.length-1].songs)
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
                        cuerecentpaylist:state.recentlyplayed.length>0?state.recentlyplayed[0].songs:[]
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
        
           
        }

    }, [state])
   const  openDocumentPicker=async ()=>{
    try {
        const results = await DocumentPicker.pickMultiple({
          type: [DocumentPicker.types.audio],
          readContent:true
        });
        Actions.Hostsession()
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
    }
    const Recently_played_list = ({ item,  }) => {

        return (
            <Touchable onPress={() =>Actions.Hostsession()
            }>
                <AppView style={style.unselectedLayout}>
                    <Image
                     resizeMode="contain"
                        style={{  width:width*0.35,height: 80, borderRadius: 10, }}
                        source={item.songImage?{uri:item.songImage}:songimage} />

                    <AppText style={[style.normalText, { fontWeight: "normal", top: 2, fontSize: 14, textAlign: 'center' }]}>
                        {item.name}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }
    const Myplaylist_list = ({ item,  }) => {
        return (
            <Touchable onPress={ () => Actions.Mylibrary({ "Page": "cuemusictab","clicktype":"paylist" ,"Playlistsong":item.songs,"titleName":item.playlistName,"mainthumbnail":item.thumbnail}) }>
                  <AppView style={style.unselectedLayout}>
                  <Image
                    resizeMode="contain"
                        style={{  width:width*0.35, height: 80, borderRadius: 10, }}
                        source={{uri:item.thumbnail}} />
                    <AppText style={[style.normalText, { fontWeight: "normal", top: 2, fontSize: 14, textAlign: 'center' }]}>
                        {item.playlistName}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }
    const Mylibrary_list = ({ item,  }) => {

        return (
            <Touchable onPress={ () => item.type =="Local Storage"? openDocumentPicker()
            :Actions.Mylibrary({ "Page": "cuemusictab","clicktype":"librarysec","titleName":item.type,"mainthumbnail":item.type=="Deezer"?googlemusic:havana,}) }>
              <AppView style={[style.unselectedLayout, {
                   alignItems: 'center',alignSelf: 'center',
                    width: width * 0.45,margin: 5,
                }]}>
                    {/* <Image
                        style={{ width: 180, height:100, borderRadius: 10, }}
                        source={item.libraryimage} />

                    <AppText style={[style.normalText, { width: width * 0.4, fontWeight: "normal", marginVertical: 2, fontSize: 14, textAlign: 'center' }]}>
                        {item.libraryname}
                    </AppText> */}
                       <Image
                         resizeMode="cover"
                        style={{ width: 170, height: 100, borderRadius: 10, }}
                        source={item.type== "Local Storage" ?havana:googlemusic} />

                    <AppText style={[style.normalText, { width: width * 0.4, fontWeight: "normal", marginVertical: 2, fontSize: 14, textAlign: 'center' }]}>
                        {item.type}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }
    return (
    
        <Container scrollable nocroosback Withoutimage header={true} title={Cue_Music}
            right_second={magnifier}
            right_secondclik={()=>setState({...inbuiltstate,searchstatus:!inbuiltstate.searchstatus})}
            backnavigate={props.Page == undefined ? props.backnavigatecuemusic : () => Actions.pop()}
        >
           {inbuiltstate.searchstatus?
           <SearchCustom/>
           :
           null
        }
            <AppView style={{
                // height:props.Page==undefined? height * 0.18:height*0.2,
                width,
                alignItems: 'flex-start',
                alignSelf: 'center',
                justifyContent: 'center',
            }}>

                <AppText style={[style.normalText, {
                    fontWeight: "bold", width: width * 0.9, alignSelf: 'center', textAlign: "left", marginTop: props.Page == undefined ? 5 : 10, right: 5
                }]}>
                    Recently played
                            </AppText>

                {
                    inbuiltstate.cuerecentpaylist.length === 0 ?

                    
                    <AppView style={{
                        width,
                        alignItems: 'center',
                    }}>
                            <AppImage  source={emtyicon}/>
                           </AppView>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={inbuiltstate.cuerecentpaylist}
                            renderItem={(item, index) => Recently_played_list(item, )}
                        />

                }
            </AppView>
            <AppView style={{
                // height: props.Page==undefined? height * 0.18:height*0.2,
                width,
                alignItems: 'flex-start',
                alignSelf: 'center',
                justifyContent: 'center',
            }}>
                <AppText style={[style.normalText, {
                    fontWeight: "bold", width: width * 0.9, alignSelf: 'center', textAlign: "left", marginTop: props.Page == undefined ? 5 : 10, right: 5
                }]}>
                    My  Playlist
                            </AppText>
                {
                     inbuiltstate.cueplaylist.length === 0 ?

                       
                    <AppView style={{
                        width,
                        alignItems: 'center',
                    }}>
                            <AppImage  source={emtyicon}/>
                           </AppView>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={inbuiltstate.cueplaylist}
                            renderItem={(item, index) => Myplaylist_list(item)}
                        />

                }
            </AppView>
                <AppView style={{
                // flex:height <=736? null:1,
              flex:1,
                // height: height * 0.2,
                marginBottom: 40,
                width,
                alignItems: 'flex-start',
                alignSelf: 'center',
                justifyContent: 'center',
            }}>
                <AppView style={{ width: width * 0.9, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <AppText style={[style.normalText, {
                        fontWeight: "bold", textAlign: "left", right: 8, marginTop:  10,
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
                            <AppImage  source={emtyicon}/>
                           </AppView>
                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            data={inbuiltstate.musiclibrarylist}
                            renderItem={(item, index) => Mylibrary_list(item, )}
                            numColumns={2}
                        />

                }
               
            </AppView>

        </Container>
    )
}