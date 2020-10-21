import React, { useState, useRef, useEffect,Alert } from 'react';
import { FlatList, Dimensions, ImageBackground, Image } from 'react-native';
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, AppbackgraoundImage, AppImage } from '../../components/atoms';
import { Header, Fixcomponent } from '../../components/molecules/index';
const { height, width } = Dimensions.get('window');
import { Playlist } from "../../components/commomList"
import { Actions } from 'react-native-router-flux';
import { WHITE, light_blue } from '../../styles/colors';
import { threedot, bullet, queimage, endmenu } from '../../assets';


export default Playlistname = (props) => {

    const state = useSelector(state => state).reducer;

    const { My_Playlist
    } = state.language

    const [inbuiltstate, setState] =
        useState({

        });

    useEffect(() => {

    }, [])
    const removeSong=()=>{
    Alert.alert(
        "",
        "Successfully remove from  queue",
        [
          // {
          //   text: "Cancel",
          //   onPress: () => console.log("Cancel Pressed"),
          //   style: "cancel"
          // },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
    const Play_list = ({ item, index }) => {

        return (
            <AppView>
                <AppView style={style.unselectedLayout}>
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

                    <Touchable onPress={()=>removeSong()}>
                        <AppImage  source={threedot} style={{
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

                <AppbackgraoundImage style={{
                    height: height * 0.4,
                    width,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                }} source={queimage}>
                    <Header nocroosback
                        backnavigate={props.backnavigateplaylistname}
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
                                Promise
</AppText>
                            <AppText style={[style.normalText, { fontWeight: 'normal', fontSize: 15, color: WHITE }]}>
                                John Palmar
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
                                23 songs
                        </AppText>
                            <AppImage style={{
                                width: 12,
                                height: 12,
                                marginTop: 6,
                                marginHorizontal: 5,
                            }} source={bullet} />
                            <AppText style={[style.normalText, { fontWeight: 'bold', fontSize: 17, color: light_blue }]}>
                                05:22:17
                        </AppText>
                        </AppView>
                    </AppView>

                </AppbackgraoundImage>
                <AppView style={{
                    flex: 1,
                    height:height <=736?height * 0.48: height * 0.45,
                    width,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'flex-end',
                    backgroundColor: "white",


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
                    {/* <AppImage style={{backgroundColor: "yellow",width:20,height:20}} source={endmenu
                    }/> */}

                    <Fixcomponent
                        onPressfix={props.navigatecuemusic}
                    />
                </AppView>
            </AppView>

        </AppView >
    )
}