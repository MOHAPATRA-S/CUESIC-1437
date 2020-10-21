import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  
  Dimensions,
} from 'react-native';

const AlbumArt = ({
  url,
  Advertisement,
  onPress
}) => (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={onPress}> */}
      <Image
        // resizeMode="contain"
        style={[styles.image, { borderBottomLeftRadius:   Advertisement?40:null, borderBottomRightRadius:  Advertisement?40:null, }]}
        source={url}
      />
      {/* </TouchableOpacity> */}
    </View>
  );

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    // position:"absolute",
    // paddingLeft: 24,
    // paddingRight: 24,
  },
  image: {
    width,
    // position:"absolute",
    // flex:1,
    height: height * 0.4,
  },
})
