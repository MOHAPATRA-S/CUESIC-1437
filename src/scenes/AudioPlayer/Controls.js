import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Playbutton, Playlistnameicon, next, Previous, inactivemenu, Pausebutton } from '../../assets';
import { Actions } from 'react-native-router-flux';

const Controls = ({
  paused,
  libraryon,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  Advertisement,
  forwardDisabled,
}) => (
    <View style={styles.container}>
  
  {
        Advertisement ? null :
          <TouchableOpacity
          //  activeOpacity={0.0}
          // onPress={onPressRepeat}>
          onPress={()=>Actions.Cuemusic({"Page":"musicscreen"})}
          >
            <Image resizeMode="contain" style={[styles.secondaryControl,
      //  repeatOn ? [] : styles.off
      ]}
        source={inactivemenu}/>
          </TouchableOpacity>
      }
      <View style={{ width: 40 }} />
      {/* {
        Advertisement ?
          null :
          <TouchableOpacity onPress={onBack}>
            <Image style={{ width: 40, height: 40 }} resizeMode="contain" source={Previous} />
          </TouchableOpacity>
      } */}

      <View style={{ width: 20 }} />
      {!paused ?
        <TouchableOpacity onPress={onPressPause}>
          <View style={styles.playButton}>
            <Image style={styles.playButton} resizeMode="contain" source={Playbutton} />
          </View>
        </TouchableOpacity> :
        <TouchableOpacity onPress={onPressPlay}>
          <View style={styles.playButton}>
            <Image style={[styles.playButton, { transform: [{ rotate: '180deg' }] }]} resizeMode="contain" source={Pausebutton} />
          </View>
        </TouchableOpacity>
      }
      <View style={{ width: 20 }} />
      {/* {
        Advertisement ?
          null :
          <TouchableOpacity onPress={onForward}
            disabled={forwardDisabled}>
            <Image resizeMode="contain" style={{ width: 40, height: 40 }}      // style={[forwardDisabled && {opacity: 0.3}]}
              source={next} />
          </TouchableOpacity>

      } */}

      <View style={{ width: 40 }} />
      {
        Advertisement ? null :
          <TouchableOpacity
          //  activeOpacity={0.0}
          // onPress={onPressRepeat}>
          onPress={()=>Actions.Playlistname({"page":"musicscreen"})}
          >
            <Image resizeMode="contain" style={[styles.secondaryControl,
      //  repeatOn ? [] : styles.off
      ]}
        source={Playlistnameicon}/>
          </TouchableOpacity>
      }

    </View>
  );

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 1,
    // backgroundColor:"red"

  },
  playButton: {
    height: 90,
    width: 90,
    // borderWidth: 1,
    // borderColor: 'white',
    borderRadius: 90 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  off: {
    opacity: 0.30,
  }
})
