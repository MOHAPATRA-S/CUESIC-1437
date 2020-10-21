/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
  Platform,
  Linking,
  Dimensions,
  Alert,
  

} from 'react-native';
import { AppView, AppText, AppModal, TouchableIn } from '../../components/atoms';
const { width, height } = Dimensions.get('window');
import MiniPlayer from "../AudioPlayer/MiniPlayer"
import { Actions } from 'react-native-router-flux';
import Mylibrary from '../Mylibrary';
import Myplaylist from '../Myplaylist';
import Playlistname from '../Playlistname/index';
import Cuemusic from '../Cuemusic';
import AnimationMusic from "../AnimationMusic/index"
import style from "./style"
import AsyncStorage from '@react-native-community/async-storage';

export default Musicscreen = (props) => {

  let [inbuiltstate, setState] =
    useState({
      Mylibraryopen: false,
      successfuladd: false,
      Cuemusicopen: false,
      Queuesongsarray: "",
      addstatus:false,
      ministatus:false

    });

  useEffect(() => {
    AsyncStorage.getItem("Listofsongs").then(async resp => {
      if (JSON.parse(resp) != null) {
        await setState({ ...inbuiltstate, Queuesongsarray: JSON.parse(resp) })
      }
    })
  
  }, [inbuiltstate.addstatus])
  const addFunc = (ID) => {
  
    if ((inbuiltstate.Queuesongsarray.length % 3) == 0) {
      setState({ ...inbuiltstate, addstatus: true })


      Actions.addPlayer()
      
    }
    else {
    
      inbuiltstate.Queuesongsarray.push(ID)
      console.log("songs--->>",inbuiltstate.Queuesongsarray)
      setState({ ...inbuiltstate, Queuesongsarray:  inbuiltstate.Queuesongsarray })
     
      Alert.alert(
        "",
        "Successfully added in queue",
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

   
  }
  return (
    <AppView>
      <AppView style={{ position: 'absolute', zIndex: 0, }}>
        {inbuiltstate.Mylibraryopen ?

          <Mylibrary
            navigatenext={() =>
              addFunc({ "id": "hsfsdbvfhsbd" })
              //    setState({
              //   ...inbuiltstate, successfuladd: true
              // })
            }
            backnavigate={() => setState({
              ...inbuiltstate, Mylibraryopen: false, Cuemusicopen: true

            })}
          />

          :
          inbuiltstate.Cuemusicopen ?
            <Cuemusic
              navigatlibrary={() => setState({
                ...inbuiltstate, Mylibraryopen: true, Cuemusicopen: false



              })}

              navigatefromsinglsong={() => addFunc({ "id": "hsfsdbvfhsbd" })}
              backnavigatecuemusic={() => setState({
                ...inbuiltstate, Mylibraryopen: false, Cuemusicopen: false


              })}

            />
            :

            <Playlistname
              navigatecuemusic={() => setState({
                ...inbuiltstate, Cuemusicopen: true,



              })}

            />
        }


      </AppView>

      <AnimationMusic 
     
      ministatus={inbuiltstate.ministatus}
      Advertisement={inbuiltstate.addstatus} />


    </AppView>

  );
}


