import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  ImagePropTypes,
} from 'react-native';
import { inactivemenu, onrepeat, suffleon } from '../../assets';

const TrackDetails = ({
  title,
  artist,
  shuffleOn,
  repeatOn,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
  onPressShuffle,
  onPressRepeat,
  Advertisement
}) => (
  <View style={styles.container}>
    {/* <TouchableOpacity onPress={onAddPress}>
      <Image style={styles.button}
        source={require('../../img/ic_add_circle_outline_white.png')} />
    </TouchableOpacity> */}
    <View style={[styles.detailsWrapper,{   left:Advertisement?null:17}]}>
      <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
      <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
    </View>
    {/* <TouchableOpacity onPress={onMorePress}>
      <View style={styles.moreButton}>
        <Image style={styles.moreButtonIcon}
          source={require('../../img/ic_more_horiz_white.png')} />
      </View>
    </TouchableOpacity> */}
    {
      Advertisement?null:
      <View style={{marginTop: 70,flexDirection: 'row',}}>
     <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Image 
      style={[styles.secondaryControl,{right:18},
        repeatOn ? [] : styles.off
        ]}
        source={onrepeat}/>
    </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Image 
      style={[styles.secondaryControl,
         shuffleOn ? [] : styles.off
        ]}
        source={suffleon}/>
    </TouchableOpacity>
     </View>
    }
     
  </View>
);

export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 10,
    flexDirection: 'row',
    // paddingLeft: 20,
    alignItems: 'center',
    // paddingRight: 20,
    // backgroundColor:'red'
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(106,6,3)',
    textAlign: 'center',
  },
  artist: {
    color: 'rgb(104,129,143)',
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    opacity: 0.72,
  },
  moreButton: {
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: 17,
    width: 17,
   
  },
   secondaryControl: {
    height: 18,
    width: 18,
    right:10

  },
});
