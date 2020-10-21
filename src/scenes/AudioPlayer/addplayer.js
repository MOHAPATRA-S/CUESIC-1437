import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import { addprofile, camara, thumbnailofsong,blackcross, addcover } from '../../assets';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';
import { AppView,AppModal,TouchableIn,AppText, AppImage,Touchable } from '../../components/atoms';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE,BLACK,GRAY, light_blue } from '../../styles/colors';
import { Actions } from 'react-native-router-flux';
import { Drop_Down_Modal_forall, CustomButton, Input,Drop_Down_Modal_for_flatlist } from '../../components/molecules';
import style from "../../styles/index"
import { Songlist } from '../../components/commomList';
const { width, height } = Dimensions.get('window');

export default class addPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
      logoutmodal: false,
      savemodal:false,
      emailStatus:false,
        emailError:"", 
        email:"",
        subscriptionmodal:false,
        subscription:false

    };
  }
  componentDidMount() {

  }
  async setDuration(data) {

    await this.setState({ totalLength: Math.floor(data.duration) });


  }

  async setTime(data) {
    await this.setState({ currentPosition: Math.floor(data.currentTime) });

    if (Math.floor(data.currentTime) >= Math.floor(data.playableDuration)) {
      this.state.subscription?
      this.setState({subscriptionmodal:true})
    
:
Actions.Musicscreen()

    }


  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }
  onEnd() {
    this.setState({ logoutmodal: true })
  }
  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < this.props.tracks.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }
  }

  async suffleFunc() {
    this.props.tracks.sort(function () {
      return .5 - Math.random();
    });
  }
  async repeatFunc() {
    await this.setState({ repeatOn: !this.state.repeatOn })

  }
  handlevalidate(text){

    if(text === ''){
      this.setState({
        emailStatus:false,
        emailError:"Please enter name.", 
        email:""

      })
    }
    else{
      this.setState({
        emailStatus:true,
        emailError:"", 
        email:text

      })
    }

  }
  submit(){

    if (this.state.emailStatus) {
     this.setState({savemodal:false})
     Actions.tabBar()
  }
  else { this.setState({  emailstatus: false, emailError:"Please enter name.", }) }
  }
  render() {
    // const track = this.props.tracks[this.state.selectedTrack];
    const video = this.state.isChanging ? null : (

      <Video source={{ uri: "https://z5shorts.akamaized.net/2020/6/19/01256993-476a-4e35-b741-34596d9bdfec/01256993-476a-4e35-b741-34596d9bdfec_DownloadWM.mp4" }}
     
      posterResizeMode={"cover"}
        ignoreSilentSwitch={"obey"}// Can be a URL or a local file.
        ref={"mediaPlayer"}
        paused={this.state.paused}               // Pauses playback entirely.
        resizeMode="cover"           // Fill the whole screen at aspect ratio.
        repeat={this.state.repeatOn}                // Repeat forever.
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        onEnd={this.onEnd.bind(this)}           // Callback when playback finishes
        onError={this.videoError}    // Callback when video cannot be loaded
        style={styles.mediaPlayer} />
    );

    return (
      <AppView style={[styles.container, {
        alignItems:  'flex-start' ,
        justifyContent:  'flex-start' 
      }]}>

      
          <AppView style={[styles.container, { alignItems: 'flex-start', justifyContent: 'flex-start' }]}>
            <AlbumArt  Advertisement url={addcover} />
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
                  // artist={track.artist}

                />

                <SeekBar

                  onSeek={this.seek.bind(this)}
                  trackLength={this.state.totalLength}
                  onSlidingStart={() => this.setState({ paused: true })}
                  currentPosition={this.state.currentPosition} />

                <Touchable

                onPress={()=>this.setState({  subscription: true })}
                  style={{
                    width: width * 0.9,
                    height: height * 0.08,
                    backgroundColor: "rgb(239,239,239)",
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <AppText style={{color:light_blue}}>
                    If you want to have an Ad free Experience. Click Here !!!
</AppText>
                </Touchable>
          
               
              </AppView>
            </AppView>
          </AppView>
          

            <Drop_Down_Modal_for_flatlist  
            onPressClose={() =>  this.setState({  subscriptionmodal: false })}
            data={Songlist}
            visible={this.state.subscriptionmodal}
            show={true}
            onPress={(x) => {this.setState({  subscriptionmodal: false }),Actions.Paymentoption({"page":"add"})}}

       />
            
           


      </AppView>
    );
  }
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
    height:hp("30%"),
    borderRadius: 20,
  
  },
};
