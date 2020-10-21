// import React, { Component } from 'react';
// import { SafeAreaView, TouchableOpacity,Image ,Dimensions} from 'react-native'
// import Player from './Player';
// // import AppConstant from '../../common/AppConstant';
// // import {cross} from '../../assets/Images/_index';
// import { WHITE } from '../../styles/colors';
// import { hidepage, playsong } from '../../assets';
// import { Actions } from 'react-native-router-flux';
// const { width, height } = Dimensions.get('window');

// export default class AudioPlayer extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       TRACKS: []
//     }
//   }
//   componentDidMount() {
//     console.log("props.Advertisementform animation screen,", this.props)
//     const { TRACKS } = this.state
   
//     this.props.item.map((audio, i) => {

//       TRACKS.push(
//         {
//           title: audio.title,
//           artist: 'Pitbulll - Reputation',
//           albumArtUrl: `${this.props.images ? this.props.images[0] :playsong}`,
//           audioUrl: audio.url,
//         },
//       )
//       this.setState({ TRACKS })
//       return audio


//     })
//   }
//   render() {
//     const { TRACKS } = this.state;
//     // const TRACKS = [
//     //   { 
//     //     title: 'Stressed Out',
//     //     artist: 'Twenty One Pilots',
//     //     albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
//     //     audioUrl: this.props.item,
//     //   },
//     //   {
//     //     title: 'Love Yourself',
//     //     artist: 'Justin Bieber',
//     //     albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
//     //     audioUrl: this.props.item,
//     //   },

//     // ];
//     return this.state.TRACKS.length ? 
//     <SafeAreaView style={{ flex: 1,  }}>
//       <TouchableOpacity onPress={()=>this.props.onPressCancel()} style={{
//         position:'absolute',zIndex:1,alignItems:"center",justifyContent:"center",width
//         }}>
          
//         <Image resizeMode="contain" style={{width:60,height:60}} source={hidepage}/>
//       </TouchableOpacity>
//       <Player   libraryon={this.props.libraryon} tracks={TRACKS} />
//     </SafeAreaView> : <></>
//   }
// }




import React, { useEffect, useState } from 'react';


import { SafeAreaView, TouchableOpacity,Image ,Dimensions} from 'react-native'
import Player from './Player';
// import AppConstant from '../../common/AppConstant';
// import {cross} from '../../assets/Images/_index';
import { WHITE } from '../../styles/colors';
import { hidepage, playsong } from '../../assets';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const AudioPlayer = (props) => {

let[inbuiltstate,setState]=useState({

  TRACKS:[],
  addTRACKS:[]


})
  useEffect(() => {

    // if (props.Advertisement == true) {

    //   props.item.map((audio, i) => {

    //     inbuiltstate.addTRACKS.push(
    //       {
    //         title: audio.title,
    //         artist: 'Pitbulll - Reputation',
    //         albumArtUrl: `${props.images ? props.images[0] : playsong}`,
    //         audioUrl: audio.url,
    //       },
    //     )
    //     setState({ ...inbuiltstate, addTRACKS: inbuiltstate.addTRACKS })
    //     return audio
    //   })
    // }
    // else {
      props.item.map((audio, i) => {

        inbuiltstate.TRACKS.push(
          {
            title: audio.title,
            artist: 'Pitbulll - Reputation',
            albumArtUrl: `${props.images ? props.images[0] : playsong}`,
            audioUrl: audio.url,
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
          alignItems:"center",justifyContent:"center",width
          }}>
            {console.log("inbuiltstate",inbuiltstate.addTRACKS)}
            
          <Image resizeMode="contain" style={{width:60,height:60}} source={hidepage}/>
        </TouchableOpacity>
        <Player ministatus={props.ministatus}  Advertisement={props.Advertisement}  tracks={inbuiltstate.TRACKS} />
      </SafeAreaView> : <></>

}
export default AudioPlayer;
