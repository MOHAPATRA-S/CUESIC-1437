import React, { Component, useRef, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  Alert
} from 'react-native';
import { addprofile, camara, thumbnailofsong, blackcross, addcover } from '../../assets';
import Video from 'react-native-video';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import { AppView, AppModal, TouchableIn, AppText, AppImage, Touchable } from '../../components/atoms';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, BLACK, GRAY, light_blue } from '../../styles/colors';
import { Actions } from 'react-native-router-flux';
import { Drop_Down_Modal_forall, CustomButton, Input, Drop_Down_Modal_for_flatlist } from '../../components/molecules';
import style from "../../styles/index"
import { Songlist } from '../../components/commomList';
import { useDispatch, useSelector } from 'react-redux';
import { Getsubscriptionlist, clearAction } from '../../Action/Action';
import AsyncStorage from '@react-native-community/async-storage';
const { width, height } = Dimensions.get('window');
let Token
export default addPlayer = (props) => {
  const mediaPlayer = useRef();
  const dispatch = useDispatch()
  const state = useSelector(state => state).reducer;
  let [inbuiltstate, setState] = useState({
    paused: false,
    totalLength: 1,
    currentPosition: 0,
    selectedTrack: 0,
    repeatOn: false,
    shuffleOn: false,
    logoutmodal: false,
    savemodal: false,
    emailStatus: false,
    emailError: "",
    email: "",
    subscriptionmodal: false,
    subscription: false,
    subscriptiondetails: ""
  })
  const setDuration = async (data) => {
    await setState({ ...inbuiltstate, totalLength: Math.floor(data.duration) });
  }
  const setTime = async (data) => {
    await setState({ ...inbuiltstate, currentPosition: Math.floor(data.currentTime) });
  }
  const seek = (time) => {
    time = Math.round(time);
    mediaPlayer && tmediaPlayer.current.seek(time);
    setState({
      ...inbuiltstate,
      currentPosition: time,
      paused: false,
    });
  }
  const onEnd = () => {
    setState({
      ...inbuiltstate,
      paused: true,

    });
    if (inbuiltstate.subscription === true) {
      setState({ ...inbuiltstate, subscriptionmodal: true })
    }
    else {
       Actions.Musicscreen()

    }


  }
  useEffect(() => {
    AsyncStorage.getItem("userToken").then(resp => {
      if (JSON.parse(resp) != null) {
        Token = JSON.parse(resp)
        dispatch(Getsubscriptionlist(Token))

      }
    })
  }, [])
  useEffect(() => {
    switch (state.case) {
      case "GETSUBSCRIPTIONLIST_SUCCESS":

        setState({ ...inbuiltstate, subscriptiondetails: state.subscriptionlist })
        dispatch(clearAction())

        break;
      case "GETSUBSCRIPTIONLIST_FAILURE":
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
  const video = props.advertiseDetails.advertisement ? (
    <Video source={{ uri: props.advertiseDetails.advertisement }}
      posterResizeMode={"cover"}
      ignoreSilentSwitch={"obey"}// Can be a URL or a local file.
      ref={mediaPlayer}
      paused={inbuiltstate.paused}               // Pauses playback entirely.
      resizeMode="cover"           // Fill the whole screen at aspect ratio.
      // repeat={this.state.repeatOn}                // Repeat forever.
      // onLoadStart={this.loadStart} // Callback when video starts to load
      onLoad={(e) => setDuration(e)}    // Callback when video loads
      onProgress={(e) => setTime(e)}   // Callback every ~250ms with currentTime
      onEnd={() => onEnd()}             // Callback when playback finishes
      // onError={videoError()}    // Callback when video cannot be loaded
      style={styles.mediaPlayer} />
  ) :
    null
  return (
    <AppView style={[styles.container, {
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }]}>
      <AppView style={[styles.container, { alignItems: 'flex-start', justifyContent: 'flex-start' }]}>
        <AlbumArt
          Advertisement />
        <AppView
          style={{
            flex: 1,
            // position:"absolute",
            //  bottom: 50,
            //  height: height * 0.6,
            width: width,
            backgroundColor: WHITE,
            alignSelf: "center",
            //  borderTopLeftRadius: 40,
            //  borderTopRightRadius: 42,
            alignItems: 'center',
          }}>
          <AppView style={{ width: width * 0.88, alignItems: "center", justifyContent: 'center', alignSelf: 'center', }}>
            {video}
          </AppView>
          <AppView style={{ bottom: 40, width: width, }}>
            <TrackDetails
              Advertisement
              title={"Advertisement"}
            // artist={track.artist
            />
            <SeekBar
              onSeek={(e) => seek(e)}
              trackLength={inbuiltstate.totalLength}
              onSlidingStart={() => setState({ ...inbuiltstate, paused: true })}
              currentPosition={inbuiltstate.currentPosition} />

            <Touchable

              onPress={() => setState({ ...inbuiltstate, subscription: true })}
              style={{
                width: width * 0.9,
                height: height * 0.08,
                backgroundColor: "rgb(239,239,239)",
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <AppText style={{ color: light_blue }}>
                If you want to have an Ad free Experience. Click Here !!!
</AppText>
            </Touchable>


          </AppView>
        </AppView>
      </AppView>

      <Drop_Down_Modal_for_flatlist
        modalsubsriptiondetails
        onPressClose={() => console.log("nothing")}
        data={inbuiltstate.subscriptiondetails}
        visible={inbuiltstate.subscriptionmodal}
        show={true}
        onPress={(x) => { setState({ ...inbuiltstate, subscriptionmodal: false }); Actions.Paymentoption({ "page": "add", "subscriptionforpayment": x }) }}

      />

    </AppView>
  );
}


const styles = {
  container: {
    // flex: 1,
    height,
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  audioElement: {
    height: 0,
    width: 0,
  },
  mediaPlayer: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    // backgroundColor: 'white',
    alignSelf: "center",
    bottom: height * 0.15,
    // position: "absolute",
    width: wp('80%'),
    height: hp("30%"),
    borderRadius: 20,

  },
};
