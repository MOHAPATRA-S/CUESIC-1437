
import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity,Image ,Dimensions} from 'react-native'
import Player from './Player';
import { WHITE } from '../../styles/colors';
import { hidepage, playsong, backcross, thumbnailofsong } from '../../assets';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const AudioPlayer = (props) => {
let[inbuiltstate,setState]=useState({

  TRACKS:[],
  addTRACKS:[]
})
  useEffect(() => {
 
      props.item.map((audio, i) => {
console.log("audio====>>>",audio)
        inbuiltstate.TRACKS.push(
          {
            title: audio.name,
            artist: audio.albumArtist,
            albumArtUrl:audio.songImage==undefined? "":audio.songImage ,
            audioUrl: audio.uri,
          },
        )
        setState({ ...inbuiltstate, TRACKS: inbuiltstate.TRACKS })
        return audio
      })
    // }

  }, [props])

  return inbuiltstate.TRACKS.length ? 
      <SafeAreaView style={{ flex: 1,  }}>
        <TouchableOpacity onPress={()=>props.onPressCancel()} style={{
          position:'absolute',zIndex:1,
          alignItems:"flex-end",justifyContent:"center",width
          }}>
          
            
          <Image resizeMode="contain" style={{width:30,height:30,top:10,right:10}} source={backcross}/>
        </TouchableOpacity>
        <Player  Advertisement={props.Advertisement}  tracks={inbuiltstate.TRACKS} />
      </SafeAreaView> : <></>

}
export default AudioPlayer;
