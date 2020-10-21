import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, ImageBackground, Image,alert } from 'react-native';
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, AppbackgraoundImage, AppImage } from '../../components/atoms';
import { Header, SearchCustom } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import { Recently_played, Mylibrarylist, playlist_now, Popular_now } from "../../components/commomList"
import { Actions } from 'react-native-router-flux';
import { WHITE, light_blue } from '../../styles/colors';
import { magnifier } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';

export default Tabcuemusic = (props) => {
console.log("height,height",props.Page)
    const state = useSelector(state => state).reducer;

    const { Cue_Music,
    } = state.language

    const [inbuiltstate, setState] =
        useState({
            searchstatus:false
        });

    useEffect(() => {

    }, [])
    
    const Recently_played_list = ({ item, index }) => {

        return (
            <Touchable onPress={() =>Actions.Hostsession()
            }>
                <AppView style={style.unselectedLayout}>
                    <Image
                        style={{ marginHorizontal: 5, width: 120, height: 80, borderRadius: 10, }}
                        source={item.details} />

                    <AppText style={[style.normalText, { fontWeight: "normal", top: 2, fontSize: 14, textAlign: 'left' }]}>
                        {item.title}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }

    // const Popular_list = ({ item, index }) => {

    //     return (

    //         <Touchable onPress={props.Page == undefined ? props.navigatefromsinglsong :  () => Actions.Musicscreen({ "key": "popularnow" })}>
    //             <AppView style={style.unselectedLayout}>
    //                 <Image
    //                     style={{ marginHorizontal: 5, width: 120, height: 80, borderRadius: 10, }}
    //                     source={item.popularimage} />

    //                 <AppText style={[style.normalText, { fontWeight: "normal", top: 2, fontSize: 14, textAlign: 'left' }]}>
    //                     {item.popularname}
    //                 </AppText>
    //             </AppView>
    //         </Touchable>
    //     )
    // }

    const Myplaylist_list = ({ item, index }) => {

        return (
            <Touchable onPress={ () => Actions.Mylibrary({ "Page": "cuemusictab" }) }>
                  <AppView style={style.unselectedLayout}>
                    <Image
                        style={{ marginHorizontal: 5, width: 120, height: 80, borderRadius: 10, }}
                        source={item.playlistimage} />

                    <AppText style={[style.normalText, { fontWeight: "normal", top: 2, fontSize: 14, textAlign: 'left' }]}>
                        {item.playlistname}
                    </AppText>
                </AppView>
            </Touchable>
        )
    }

    const Mylibrary_list = ({ item, index }) => {

        return (
            <Touchable onPress={ () => Actions.Mylibrary({ "Page": "cuemusictab" }) }>
              <AppView style={[style.unselectedLayout, {
                    marginVertical: props.Page == undefined ? null : 2, alignItems: 'center',
                    width: width * 0.5,
                }]}>
                    <Image
                        style={{ width: 180, height:100, borderRadius: 10, }}
                        source={item.libraryimage} />

                    <AppText style={[style.normalText, { width: width * 0.4, fontWeight: "normal", marginVertical: 2, fontSize: 14, textAlign: 'left' }]}>
                        {item.libraryname}
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
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',


            }}>

                <AppText style={[style.normalText, {
                    fontWeight: "bold", width: width * 0.9, alignSelf: 'center', textAlign: "left", marginTop: props.Page == undefined ? 5 : 10, right: 5
                }]}>
                    Recently played
                            </AppText>

                {
                    Recently_played.length === 0 ?

                        <AppText style={[style.normalText]}>
                            No records found!
                            </AppText>

                        :

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={Recently_played}
                            renderItem={(item, index) => Recently_played_list(item, index)}


                        />

                }
            </AppView>
            {/* <AppView style={{

                // height:props.Page==undefined? height * 0.18:height*0.2,
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',


            }}>
                <AppText style={[style.normalText, {
                    fontWeight: "bold", width: width * 0.9, alignSelf: 'center', textAlign: "left", marginTop:props.Page==undefined? 5:10, right: 5
                }]}>
                    Popular Now
            </AppText>
                {
                    Popular_now.length === 0 ?

                        <AppText style={[style.normalText]}>
                            No records found!
            </AppText>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={Popular_now}
                            renderItem={(item, index) => Popular_list(item, index)}


                        />

                }
            </AppView> */}

            <AppView style={{

                // height: props.Page==undefined? height * 0.18:height*0.2,
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',


            }}>
                <AppText style={[style.normalText, {
                    fontWeight: "bold", width: width * 0.9, alignSelf: 'center', textAlign: "left", marginTop: props.Page == undefined ? 5 : 10, right: 5
                }]}>
                    My  Playlist
                            </AppText>
                {
                    playlist_now.length === 0 ?

                        <AppText style={[style.normalText]}>
                            No records found!
                            </AppText>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={playlist_now}
                            renderItem={(item, index) => Myplaylist_list(item, index)}


                        />

                }
            </AppView>



{/* 
            <AppView style={{
                // flex:height <=736? null:1,
               flex:1,
                // height: height * 0.2,
                bottom: props.Page == undefined ? 10 : null,
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',


            }}> */}
                <AppView style={{
                // flex:height <=736? null:1,
              flex:1,
                // height: height * 0.2,
                marginBottom: 40,
                
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',


            }}>
                <AppView style={{ width: width * 0.9, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <AppText style={[style.normalText, {
                        fontWeight: "bold", textAlign: "left", right: 8, marginTop: props.Page == undefined ? 10 : 10,
                    }]}>
                        Music Library
                            </AppText>

                </AppView>

                {
                    Mylibrarylist.length === 0 ?

                        <AppText style={[style.normalText]}>
                            No records found!
        </AppText>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            data={Mylibrarylist}
                            renderItem={(item, index) => Mylibrary_list(item, index)}

                            numColumns={2}
                        />

                }
            </AppView>

        </Container>
    )
}