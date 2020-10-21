
import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, ImageBackground, Image } from 'react-native';
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, AppbackgraoundImage, AppImage } from '../../components/atoms';
import { Header } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import { Playlist } from "../../components/commomList"
import { Actions } from 'react-native-router-flux';
import { WHITE, light_blue, BLACK, Error_Red } from '../../styles/colors';
import { threedot, bullet, onrepeat, suffleon, playsong, Playlistenbutton, ProfileEDit, Profilebackicon, libraryback } from '../../assets';
import AlbumArt from '../AudioPlayer/AlbumArt';
import AsyncStorage from '@react-native-community/async-storage';

export default Mylibrary = (props) => {

    const state = useSelector(state => state).reducer;

    const { My_Playlist
    } = state.language

    const [inbuiltstate, setState] =
        useState({

        });

    useEffect(() => {
       
    }, [])
    const songStoreinqueue = (ID) => {

        let queueList = []
        queueList.push(ID)
        let queueListarray = queueList
       
        AsyncStorage.setItem("Listofsongs", JSON.stringify(queueListarray))

        Actions.Musicscreen({ "key": "recentplayed" })
    }
    const Play_list = ({ item, index }) => {

        return (
                <Touchable onPress={props.Page=="cuemusic"?()=>songStoreinqueue({"id":"hsfsdbvfhsbd"}):props.Page=="cuemusictab"?()=>Actions.Hostsession():props.navigatenext}style={style.unselectedLayout}>
                    <AppView style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{ marginHorizontal: 5, width: 70, height: 50, borderRadius: 5, }}
                            source={item.profile} />
                        <AppView>
                            <AppText style={[style.normalText, { fontWeight: "normal", left: 10, fontSize: 16, }]}>
                                {item.title}
                            </AppText>
                            <AppText style={[style.normalText, { left: 10 }]}>
                                {item.singer}
                            </AppText>
                        </AppView>

                    </AppView>

                    <Touchable onPress={props.Page=="cuemusic"?()=>songStoreinqueue({"id":"hsfsdbvfhsbd"}):props.Page=="cuemusictab"?()=>Actions.Hostsession():props.navigatenext}>
                        <AppImage source={threedot} style={{
                            width: 20, height: 20,
                            right: 10
                        }}>

                        </AppImage>

                    </Touchable>
                </Touchable>

           
        )
    }
    return (


        <AppView style={[style.container, { alignItems: 'flex-start', justifyContent: 'flex-start', }]}>

            <ImageBackground
                resizeMode="stretch"
                style={[style.image, {  }]}
                source={libraryback}
            >
               
             <Header backnavigate={props.Page==undefined? props.backnavigate:()=>Actions.pop()}Profileback />      
               


                <AppImage style={{ width: 150, height: 150, borderRadius: 75,bottom: 25}} source={ProfileEDit} />
                <AppText style={[style.normalText, { color: BLACK ,bottom: 20,fontSize:15,fontWeight:"bold"}]} >
                    Don’t Stop The Party
                </AppText>
                <AppText style={[style.normalText, { color: Error_Red ,bottom: 18,fontSize:15,fontWeight:"bold"}]}>
                    8 songs + 40 mins
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
            <AppView style={{ width: width * 0.85, 
                alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', bottom:20}}>
                    <Touchable>


                        <AppText style={[style.normalText, { fontWeight: "bold", fontSize: 16, }]}>
                            Playlist
    </AppText>
                    </Touchable>

                    <AppView style={{ flexDirection: 'row', }}>
                        {/* <Touchable>
                            <AppImage style={{ right: 10, width: 20, height: 20 }} source={suffleon} />
                        </Touchable>
                        <Touchable>
                            <AppImage style={{ width: 20, height: 20 }} source={onrepeat} />
                        </Touchable> */}

                    </AppView>
                </AppView>
            <AppView style={{
                flex: 1,
                // bottom: props.Page==undefined?30:null,
                height: height <=736 && props.Page==undefined?height * 0.39:height <=736 && props.Page!=undefined?height * 0.45:height * 0.37,
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: WHITE,


            }}>

               
                {
                    Playlist.length === 0 ?

                        <AppText style={[style.normalText]}>
                            No records found!
                            </AppText>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            data={Playlist}
                            renderItem={(item, index) => Play_list(item, index)}
                            keyExtractor={item => item.id}

                        />

                }


            </AppView>
        </AppView>


    )
}

