import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { backcross, backIcon } from '../../assets';

const Header = ({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={()=>Actions.pop()}>
      <Image style={styles.button}
       source={backIcon}
        // source={require('../../img/ic_keyboard_arrow_down_white.png')}
         />
    </TouchableOpacity>
    <Text onPress={onMessagePress}
      style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Image style={styles.button}
 source={backcross}
        // source={require('../../img/ic_queue_music_white.png')}
         />
    </TouchableOpacity>
  </SafeAreaView>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 40,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    opacity: 0.72
  }
});
