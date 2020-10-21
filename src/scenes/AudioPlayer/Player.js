// import React, { Component } from 'react';
// import {
//   View,
//   SafeAreaView,
//   StatusBar,
//   Dimensions,
//   Image
// } from 'react-native';
// import { addprofile, camara, thumbnailofsong, blackcross } from '../../assets';
// import Header from './Header';
// import AlbumArt from './AlbumArt';
// import TrackDetails from './TrackDetails';
// import SeekBar from './SeekBar';
// import Controls from './Controls';
// import Video from 'react-native-video';
// import { AppView, AppModal, TouchableIn, AppText, AppImage, Touchable } from '../../components/atoms';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { WHITE, BLACK, GRAY, light_blue } from '../../styles/colors';
// import { Actions } from 'react-native-router-flux';
// import { Drop_Down_Modal_forall, CustomButton, Input, Drop_Down_Modal_for_flatlist } from '../../components/molecules';
// import style from "../../styles/index"
// import { Songlist } from '../../components/commomList';
// const { width, height } = Dimensions.get('window');

// export default class Player extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       paused: true,
//       totalLength: 1,
//       currentPosition: 0,
//       selectedTrack: 0,
//       repeatOn: false,
//       shuffleOn: false,
//       logoutmodal: false,
//       savemodal: false,
//       emailStatus: false,
//       emailError: "",
//       email: "",
//       subscriptionmodal: false,

//     };
//   }
//   componentDidMount() {
// console.log("addstatus,",this.props)
//   }
//   async setDuration(data) {

//     await this.setState({ totalLength: Math.floor(data.duration) });


//   }

//   async setTime(data) {
//     await this.setState({ currentPosition: Math.floor(data.currentTime) });

//     if (Math.floor(data.currentTime) >= Math.floor(data.playableDuration)) {
//       this.onForward()

//     }


//   }

//   seek(time) {
//     console.log("this.refs.audioElement",this.refs.audioElement)
//     time = Math.round(time);
//     this.refs.audioElement && this.refs.audioElement.seek(time);
//     this.setState({
//       currentPosition: time,
//       paused: false,
//     });
//   }
//   onEnd() {
//     this.setState({ logoutmodal: true })
//   }
//   onBack() {
//     if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
//       this.refs.audioElement && this.refs.audioElement.seek(0);
//       this.setState({ isChanging: true });
//       setTimeout(() => this.setState({
//         currentPosition: 0,
//         paused: false,
//         totalLength: 1,
//         isChanging: false,
//         selectedTrack: this.state.selectedTrack - 1,
//       }), 0);
//     } else {
//       this.refs.audioElement.seek(0);
//       this.setState({
//         currentPosition: 0,
//       });
//     }
//   }

//   onForward() {
//     if (this.state.selectedTrack < this.props.tracks.length - 1) {
//       this.refs.audioElement && this.refs.audioElement.seek(0);
//       this.setState({ isChanging: true });
//       setTimeout(() => this.setState({
//         currentPosition: 0,
//         totalLength: 1,
//         paused: false,
//         isChanging: false,
//         selectedTrack: this.state.selectedTrack + 1,
//       }), 0);
//     }
//   }

//   async suffleFunc() {
//     this.props.tracks.sort(function () {
//       return .5 - Math.random();
//     });
//   }
//   async repeatFunc() {
//     await this.setState({ repeatOn: !this.state.repeatOn })

//   }
//   handlevalidate(text) {

//     if (text === '') {
//       this.setState({
//         emailStatus: false,
//         emailError: "Please enter name.",
//         email: ""

//       })
//     }
//     else {
//       this.setState({
//         emailStatus: true,
//         emailError: "",
//         email: text

//       })
//     }

//   }
//   submit() {

//     if (this.state.emailStatus) {
//       this.setState({ savemodal: false })
//       Actions.tabBar()
//     }
//     else { this.setState({ emailstatus: false, emailError: "Please enter name.", }) }
//   }
//   render() {
//     const track = this.props.tracks[this.state.selectedTrack];

//     const video = this.state.isChanging ? null : (

//       <Video source={{ uri: track.audioUrl }}
//         // playInBackground
//         posterResizeMode={"cover"}
//         ignoreSilentSwitch={"obey"}// Can be a URL or a local file.
//         ref={"audioElement"}
//         paused={this.state.paused}               // Pauses playback entirely.
//         resizeMode="cover"           // Fill the whole screen at aspect ratio.
//         repeat={this.state.repeatOn}                // Repeat forever.
//         onLoadStart={this.loadStart} // Callback when video starts to load
//         onLoad={this.setDuration.bind(this)}    // Callback when video loads
//         onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
//         onEnd={this.onEnd.bind(this)}           // Callback when playback finishes
//         onError={this.videoError}    // Callback when video cannot be loaded
//         style={ styles.audioElement} />
//     );

//     return (
//       <AppView style={[styles.container, {
//         // alignItems: this.props.Advertisement === true ? 'flex-start' : null,
//         // justifyContent: this.props.Advertisement === true ? 'flex-start' : null,
//       }]}>

//         {/* {this.props.Advertisement === true ?
//           <AppView style={[styles.container, { alignItems: 'flex-start', justifyContent: 'flex-start' }]}>
//             <AlbumArt Advertisement url={track.albumArtUrl} />
//             <AppView
//               style={{
//                 flex: 1,
//                 // position:"absolute",
//                 //  bottom: 50,
//                 //  height: height * 0.6,
//                 width: width,
//                 backgroundColor: WHITE,
//                 alignSelf: "center",
//                 //  borderTopLeftRadius: 40,
//                 //  borderTopRightRadius: 42,
//                 alignItems: 'center',
//               }}>
//               <AppView style={{ width: width * 0.88, alignItems: "center", justifyContent: 'center', alignSelf: 'center', }}>
//               <Video source={{ uri: addtark.audioUrl }}
//         playInBackground
//         posterResizeMode={"cover"}
//         ignoreSilentSwitch={"obey"}// Can be a URL or a local file.
//         ref={"mediaPlayer"}
//         paused={this.state.paused}               // Pauses playback entirely.
//         resizeMode="cover"           // Fill the whole screen at aspect ratio.
//         repeat={this.state.repeatOn}                // Repeat forever.
//         onLoadStart={this.loadStart} // Callback when video starts to load
//         onLoad={this.setDuration.bind(this)}    // Callback when video loads
//         onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
//         onEnd={this.onEnd.bind(this)}           // Callback when playback finishes
//         onError={this.videoError}    // Callback when video cannot be loaded
//         style={styles.mediaPlayer} />
//               </AppView>
//               <AppView style={{ bottom: 40, width: width, }}>
//                 <TrackDetails
//                   Advertisement
//                   title={track.title}
//                 // artist={track.artist}

//                 />

//                 <SeekBar

//                   onSeek={this.seek.bind(this)}
//                   trackLength={this.state.totalLength}
//                   onSlidingStart={() => this.setState({ paused: true })}
//                   currentPosition={this.state.currentPosition} />

//                 <Touchable

//                   onPress={() => this.setState({ subscriptionmodal: true })}
//                   style={{
//                     width: width * 0.9,
//                     height: height * 0.08,
//                     backgroundColor: "rgb(239,239,239)",
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     alignSelf: 'center',
//                     marginTop: 10,
//                   }}>
//                   <AppText style={{ color: light_blue }}>
//                     If you want to have an Ad free Experience. Click Here !!!
// </AppText>
//                 </Touchable>


//               </AppView>
//             </AppView>
//           </AppView>
//           :  */}

//           <AppView style={styles.container}>
//             <AlbumArt url={track.albumArtUrl} />
//             <AppView
//               style={{
//                 // position:"absolute",
//                 bottom: 53,
//                 height: height * 0.6,
//                 width: width,
//                 backgroundColor: WHITE,
//                 alignSelf: "center",
//                 borderTopLeftRadius: 40,
//                 borderTopRightRadius: 42,
//                 alignItems: 'center',
//               }}>
//               <AppView style={{ width: width * 0.88, alignItems: "center", justifyContent: 'center', alignSelf: 'center', }}>
//                 <Image style={{
//                   width: 280,
//                   height: 280,
//                   borderRadius: 280 / 2,
//                   bottom: height * 0.2
//                   // position: "absolute",

//                 }} source={thumbnailofsong} />
//               </AppView>
//               <AppView style={{
//                 bottom: 120,
//                 width: width,
//               }}>
//                 <TrackDetails
//                   onPressRepeat={() => this.repeatFunc()
//                   }
//                   repeatOn={this.state.repeatOn}
//                   shuffleOn={this.state.shuffleOn}
//                   title={track.title} artist={track.artist}
//                   onPressShuffle={() =>
//                     this.suffleFunc()
//                   }
//                 />

//                 <SeekBar
//                   onSeek={this.seek.bind(this)}
//                   trackLength={this.state.totalLength}
//                   onSlidingStart={() => this.setState({ paused: true })}
//                   currentPosition={this.state.currentPosition} />
//                 <Controls
//                   libraryon={this.props.libraryon}
//                   forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
//                   onPressPlay={() => this.setState({ paused: false })}
//                   onPressPause={() => this.setState({ paused: true })}
//                   onBack={this.onBack.bind(this)}
//                   onForward={this.onForward.bind(this)}
//                   paused={this.state.paused} />
//                 {video}
//               </AppView>
//             </AppView>
//           </AppView>
//      {/* }  */}
//         <Drop_Down_Modal_forall
//           sessonManage
//           visible={this.state.logoutmodal}
//           headertest="Your party session is over!"
//           textbyown="Would you like to add this in your playlist"
//           textno="Discard"
//           textyes="Add as playlist"
//           onPressClose={() => this.setState({ logoutmodal: false })}
//           onPressno={() => { this.setState({ logoutmodal: false }); Actions.tabBar() }}
//           onPressyes={() => { this.setState({ logoutmodal: false, savemodal: true }) }}
//         />
//         <AppModal
//           animationType='fade'
//           visible={this.state.savemodal}>
//           <TouchableIn onPressIn={() => this.setState({ savemodal: false })} style={style.mainContainer} >
//             <AppView style={style.Modalcontainer}>
//               <AppView
//                 style={{
//                   width: width * 0.8,
//                   height: height * 0.05,
//                   flexDirection: 'row',
//                   alignSelf: 'center',
//                   marginBottom: 5,
//                   justifyContent: 'space-between',

//                 }}
//               >
//                 <AppText style={[style.normalText, {
//                   fontSize: 18,
//                   color: BLACK,
//                   marginLeft: 10,

//                 }]}>
//                   Add to playlist
//                             </AppText>
//                 <Touchable onPress={() => this.setState({ savemodal: false })}>
//                   <AppImage style={{ width: 18, height: 18 }} source={blackcross} />
//                 </Touchable>

//               </AppView>
//               <Input
//                 placeholder="My New Playlist"
//                 Inputcontainer={style.PlayerInputcontainer}
//                 Errorstyle={{ width: width * 0.65, }}
//                 onChangeText={(text) => this.handlevalidate(text, "email")}
//                 style={{
//                   borderRadius: 0,
//                   width: width * 0.65,
//                   borderColor: GRAY,
//                   height: this.state.emailError ? hp("5%") : hp("6%"),
//                 }}
//                 textInput={{width: width * 0.6,}}
//                 errortext={this.state.emailError}
//               />
//               {/* <Input
//                             placeholder={Password}
//                             Errorstyle={{ width: width * 0.75, }}
//                             style={{
//                                 borderRadius: 0,
//                                 width: width * 0.75,
//                                 borderColor: GRAY,
//                                 height: inbuiltstate.passwordError ? hp("5%") : hp("6%"),

//                             }}
//                             errortext={inbuiltstate.passwordError}
//                             onChangeText={(text) => handlevalidate(text, "password")}
//                         /> */}
//               <CustomButton
//                 onPress={() => this.submit()}
//                 style={{ width: width * 0.75 }}
//                 buttonText="Save"
//                 textstyle={[style.normalText, { fontSize: 20, color: WHITE }]}
//               />
//             </AppView>
//           </TouchableIn>
//         </AppModal>
//         <Drop_Down_Modal_for_flatlist
//           onPressClose={() => this.setState({ subscriptionmodal: false })}
//           data={Songlist}
//           visible={this.state.subscriptionmodal}
//           show={true}
//           onPress={(x) => { this.setState({ subscriptionmodal: false }), Actions.Paymentoption() }}

//         />

//       </AppView>
//     );
//   }
// }

// const styles = {
//   container: {
//     // flex: 1,
//     height,
//     // alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     backgroundColor: 'transparent',
//   },
//   audioElement: {
//     height: 0,
//     width: 0,
//   },
//   mediaPlayer: {
//     // position: 'absolute',
//     // top: 0,
//     // left: 0,
//     // bottom: 0,
//     // right: 0,
//     // backgroundColor: 'white',
//     alignSelf: "center",
//     bottom: height * 0.15,
//     // position: "absolute",
//     width: wp('80%'),
//     height: hp("30%"),
//     borderRadius: 20,

//   },
// };







import React, { Component, useState, useEffect, useRef } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import { addprofile, camara, thumbnailofsong, blackcross } from '../../assets';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';
import { AppView, AppModal, TouchableIn, AppText, AppImage, Touchable } from '../../components/atoms';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, BLACK, GRAY, light_blue } from '../../styles/colors';
import { Actions } from 'react-native-router-flux';
import { Drop_Down_Modal_forall, CustomButton, Input, Drop_Down_Modal_for_flatlist } from '../../components/molecules';
import style from "../../styles/index"
import { Songlist } from '../../components/commomList';
const { width, height } = Dimensions.get('window');

export default Player = (props) => {
  const audioElement = useRef();
  let [inbuiltstate, setState] = useState({
    paused: true,
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

  })

  useEffect(() => {

  }, [props])
  const setDuration = async (data) => {

    await setState({ ...inbuiltstate, totalLength: Math.floor(data.duration) });


  }

  const setTime = async (data) => {
    await setState({ ...inbuiltstate, currentPosition: Math.floor(data.currentTime) });

    if (Math.floor(data.currentTime) >= Math.floor(data.playableDuration)) {
      onForward()

    }


  }

  const seek = (time) => {

    time = Math.round(time);
    audioElement && audioElement.current.seek(time);
    setState({
      ...inbuiltstate,
      currentPosition: time,
      paused: false,
    });
  }
  const onEnd = () => {
    // setState({ ...inbuiltstate, logoutmodal: true })
  }
  const onBack = () => {
    if (inbuiltstate.currentPosition < 10 && inbuiltstate.selectedTrack > 0) {
      audioElement.current && audioElement.current.seek(0);
      this.setState({ ...inbuiltstate, isChanging: true });
      setTimeout(() => setState({
        ...inbuiltstate,
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: inbuiltstate.selectedTrack - 1,
      }), 0);
    } else {
      audioElement.current.seek(0);
      setState({
        ...inbuiltstate,
        currentPosition: 0,
      });
    }
  }

  const onForward = () => {
    if (inbuiltstate.selectedTrack < props.tracks.length - 1) {
      audioElement && audioElement.current.seek(0);
      setState({ ...inbuiltstate, isChanging: true });
      setTimeout(() => setState({
        ...inbuiltstate,
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: inbuiltstate.selectedTrack + 1,
      }), 0);
    }
  }

  const suffleFunc = async () => {
    props.tracks.sort(function () {
      return .5 - Math.random();
    });
  }
  const repeatFunc = async () => {
    await setState({ ...inbuiltstate, repeatOn: !this.state.repeatOn })
  }
  const handlevalidate = (text) => {

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
      Actions.tabBar()
    }
    else { setState({ ...inbuiltstate, emailstatus: false, emailError: "Please enter name.", }) }
  }
  const track = props.tracks[inbuiltstate.selectedTrack];
  const video = inbuiltstate.isChanging ? null : (
 
    <Video source={{ uri: track.audioUrl }}
      playInBackground
      posterResizeMode={"cover"}
      ignoreSilentSwitch={"obey"}// Can be a URL or a local file.
      ref={audioElement}
      paused={props.Advertisement ? true : inbuiltstate.paused}               // Pauses playback entirely.
      resizeMode="cover"           // Fill the whole screen at aspect ratio.
      repeat={inbuiltstate.repeatOn}                // Repeat forever.
      // onLoadStart={loadStart()} // Callback when video starts to load
      onLoad={(e) => setDuration(e)}    // Callback when video loads
      onProgress={(e) => setTime(e)}    // Callback every ~250ms with currentTime
      onEnd={() => onEnd()}           // Callback when playback finishes
      // onError={()=>videoError()}    // Callback when video cannot be loaded
      style={styles.audioElement} />
  );
  return (
    
    <AppView style={[styles.container, {
      // alignItems: this.props.Advertisement === true ? 'flex-start' : null,
      // justifyContent: this.props.Advertisement === true ? 'flex-start' : null,
    }]}>
{   console.log("track.albumArtUrl",track.albumArtUrl)}

      <AppView style={styles.container}>
        <AlbumArt  />
        <AppView
          style={{
            // position:"absolute",
            bottom: 53,
            height: height * 0.6,
            width: width,
            backgroundColor: WHITE,
            alignSelf: "center",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 42,
            alignItems: 'center',
          }}>
          <AppView style={{ width: width * 0.88, alignItems: "center", justifyContent: 'center', alignSelf: 'center', }}>
            <Image resizeMode="contain" style={{
              width: 280,
              height: 280,
              borderRadius: 280 / 2,
              bottom: height * 0.2
              // position: "absolute",

            }} source={track.albumArtUrl==""?thumbnailofsong:{uri:track.albumArtUrl}} />
          </AppView>
          <AppView style={{
            bottom: 120,
            width: width,
          }}>
            <TrackDetails
              onPressRepeat={() => repeatFunc()
              }
              repeatOn={inbuiltstate.repeatOn}
              shuffleOn={inbuiltstate.shuffleOn}
              title={track.title} artist={track.artist}
              onPressShuffle={() =>
                suffleFunc()
              }
            />

            <SeekBar
              onSeek={(e) => seek(e)}
              trackLength={inbuiltstate.totalLength}
              onSlidingStart={() => setState({ ...inbuiltstate, paused: true })}
              currentPosition={inbuiltstate.currentPosition} />
            <Controls
                 
                  // forwardDisabled={inbuiltstate.selectedTrack === props.tracks.length - 1}
                  onPressPlay={() => setState({...inbuiltstate, paused: false })}
                  onPressPause={() => setState({ ...inbuiltstate,paused: true })}
                  // onBack={()=>onBack()}
                  // onForward={()=>onForward()}
                  paused={inbuiltstate.paused} />
            {video}
          </AppView>
        </AppView>
      </AppView>
      
    </AppView>
  )
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
