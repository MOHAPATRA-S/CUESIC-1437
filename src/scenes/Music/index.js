import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Alert,
  Share
} from 'react-native';
import { useSelector, useDispatch, } from "react-redux"
import { AppView, AppText, AppModal, TouchableIn, Touchable, AppImage } from '../../components/atoms';
const { width, height } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import style from "./style"
import AsyncStorage from '@react-native-community/async-storage';
import AudioPlayer from '../AudioPlayer/App';
import { CustomButton, Input, Drop_Down_Modal_forall } from '../../components/molecules';
import { BLACK, GRAY, WHITE } from '../../styles/colors';
import { blackcross, share } from '../../assets';
import { GetQueuelist, clearAction, Saveplaylist } from '../../Action/Action';
let GenerateCode
let Token
export default Musicscreen = (props) => {
  const state = useSelector(state => state).reducer;
  const dispatch = useDispatch()
  let [inbuiltstate, setState] =
    useState({
      Mylibraryopen: false,
      successfuladd: false,
      Cuemusicopen: false,
      Queuesongsarray: "",
      addstatus: false,
      ministatus: false,
      savemodal: false,
      emailStatus: false,
      emailError: "",
      email: "",
      Songlist: [],
      logoutmodal: false

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
  useEffect(() => {
    switch (state.case) {
      case "GETQUEUELIST_SUCCESS":
        setState({ ...inbuiltstate, Songlist: state.queueDetails })
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
      case "SAVEPLAYLIST_SUCCESS":
        AsyncStorage.removeItem("GENERATE_CODE")
        setState({ ...inbuiltstate, addstatus: true })
        Alert.alert(
          "",
          state.message,
          [

            { text: "OK", onPress: () => Actions.tabBar() }
          ],
          { cancelable: false }
        );
        dispatch(clearAction())
        break;
      case "SAVEPLAYLIST_FAILURE":
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
  const handlevalidate = (text,) => {
    if (text === '') {
      setState({
        ...inbuiltstate,
        emailStatus: false,
        emailError: "Please enter name.",
        email: ""
      })
    }
    else {
      setState({
        ...inbuiltstate,
        emailStatus: true,
        emailError: "",
        email: text
      })
    }
  }
  const submit = () => {
    if (inbuiltstate.emailStatus) {
      setState({ ...inbuiltstate, savemodal: false })
      let palylistdetails = {
        response: true,
        generatedCode: GenerateCode,
        playlistName: inbuiltstate.email
      }
      dispatch(Saveplaylist(palylistdetails, Token))
    }
    else { setState({ ...inbuiltstate, emailstatus: false, emailError: "Please enter name.", }) }
  }
  const LeaveMeeting = () => {
    props.PageKey === "Leavesessioncaseforhost" ?
      Alert.alert(
        "",
        "Are you sure you want to end the session?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => setState({ ...inbuiltstate, logoutmodal: true }) }
        ],
        { cancelable: false }
      )
      :
      Alert.alert(
        "",
        "Are you sure you want to leave the session?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => setState({ ...inbuiltstate, logoutmodal: true }) }
        ],
        { cancelable: false }
      )
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "“Just finished enjoying a session on Cuejams. Download the app to host your session.”"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of result.activityType")
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const Discard = () => {
    setState({ ...inbuiltstate, logoutmodal: false })
    let discarddetails = {
      response: false,
      generatedCode: GenerateCode,
      playlistName: inbuiltstate.email
    }
    dispatch(Saveplaylist(discarddetails, Token))
  }
  return (
    <AppView>
      
      <AudioPlayer
        Advertisement={props.Advertisement}
        onPressCancel={() => LeaveMeeting()} item={inbuiltstate.Songlist} />
      <Drop_Down_Modal_forall
        sessonManage
        onPressshare={() => onShare()}
        visible={inbuiltstate.logoutmodal}
        headertest="Your party session is over!"
        textbyown="Would you like to add this in your playlist"
        textno="Discard"
        textyes="Add as playlist"
        share={share}
        onPressClose={() => setState({ ...inbuiltstate, logoutmodal: false })}
        onPressno={() => Discard()}
        onPressyes={() => { setState({ ...inbuiltstate, logoutmodal: false, savemodal: true }) }}
      />
      <AppModal
        animationType='fade'
        visible={inbuiltstate.savemodal}>
        <AppView  style={style.mainContainer} >
          <AppView style={style.Modalcontainer}>
            <AppView
              style={{
                width: width * 0.8,
                height: height * 0.05,
                flexDirection: 'row',
                alignSelf: 'center',
                marginBottom: 5,
                justifyContent: 'space-between',
              }}
            >
              <AppText style={[style.normalText, {
                fontSize: 18,
                color: BLACK,
                marginLeft: 10,
              }]}>
                Add to playlist
                            </AppText>
              <AppView style={{
                height: height * 0.05,
                flexDirection: 'row',
              }}>
                <Touchable onPress={() => onShare()}>
                  <AppImage style={{ width: 25, height: 20, right: 10, }} source={share} />
                </Touchable>
                <Touchable onPress={() => setState({ ...inbuiltstate, savemodal: false })}>
                  <AppImage style={{ width: 18, height: 18 }} source={blackcross} />
                </Touchable>
              </AppView>
            </AppView>
            <Input
              placeholder="My New Playlist"
              Inputcontainer={style.PlayerInputcontainer}
              Errorstyle={{ width: width * 0.65, }}
              onChangeText={(text) => handlevalidate(text)}
              style={{
                borderRadius: 0,
                width: width * 0.65,
                borderColor: GRAY,
                height: inbuiltstate.emailError ? hp("5%") : hp("6%"),
              }}
              errortext={inbuiltstate.emailError}
            />
            <CustomButton
              onPress={() => submit()}
              style={{ width: width * 0.75 }}
              buttonText="Save"
              textstyle={[style.normalText, { fontSize: 20, color: WHITE }]}
            />
          </AppView>
        </AppView>
      </AppModal>
    </AppView>
  );
}
