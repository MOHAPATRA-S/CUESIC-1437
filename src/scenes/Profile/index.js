
import React, { useState, useEffect } from 'react';
import { Dimensions, Image, Platform, ImageBackground } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { profile, camara, ProfileEDit, edit, backcover } from '../../assets';
import { Input, Header } from '../../components/molecules';
import { WHITE, DarkGrey, light_blue } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default Profile = (props) => {
    const state = useSelector(state => state).reducer;
    const {
        Profile,
        Statistics,
        Sessions_Hosted,
        Hours_Played,
        
    } = state.language

    let [inbuiltstate, setState] =
        useState({
            imagepath: "",
            coverpath:""

        });
    const openImage = (type) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64: true,
            cropping: true
        }).then(image => {

            if(type=="profilechange"){
 setState({ ...inbuiltstate, imagepath: image.path })
            }
            else{
                setState({ ...inbuiltstate, coverpath: image.path })  
            }
           
        });
    }

    return (
        <AppView style={style.defaultContainer}>
            <ImageBackground resizeMode="stretch" style={{
                height: height * 0.5,
                width,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'space-between',
             
            }} source={inbuiltstate.coverpath?{uri:inbuiltstate.coverpath}:backcover}>
                <Header Profileback
                    backnavigate={()=>Actions.pop()}
                    right_second={edit}
                    right_secondclik={()=>openImage("coverchange")}
                    title={Profile}
                />


            </ImageBackground>
            {/* <AppView style={{ backgroundColor:"pink",justifyContent: 'flex-end', alignItems: "flex-end", height, width }}> */}
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
                            John Due
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
                                15
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
                                17:24:43
                            </AppText>
                        </AppView>
                    </AppView>



                </AppView>
            {/* </AppView> */}
        </AppView>
    )

}