/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useEffect, useState, memo } from 'react';
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
  
} from 'react-native';
import { AppView, AppText } from '../../components/atoms';
import AudioPlayer from "../AudioPlayer/App"
import { Songlist, Mylibrarylist, addlist } from '../../components/commomList';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from "react-native-reanimated"
import { clamp, onGestureEvent, timing, withSpring } from "react-native-redash"
const { width, height } = Dimensions.get('window');
import MiniPlayer from "../AudioPlayer/MiniPlayer"
import { Actions } from 'react-native-router-flux';


const {
  Clock,
  Value,
  cond,
  useCode,
  set,
  block,
  not,
  clockRunning,
  interpolate,
  diffClamp,
  Extrapolate
} = Animated;
const config = {
  damping: 15,
  mass: 1,
  stiffness: 150,
  overshootClamping: false,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1

};
const AnimationMusic = memo((props) => {


 
  let [inbuiltstate, setState] =
    useState({
      Mylibraryopen: false,
      myplaylistopen: false
    });

  const translationY = new Value(0)
  const velocityY = new Value(0)
  const state = new Value(State.UNDETEDMINED)
  const offset = new Value(SNAP_BOTTOM);
  const goUp: Animated.Value<0 | 1> = new Value(0);
  const goDown: Animated.Value<0 | 1> = new Value(0);
  const MINIMIZED_PLAYER_HEIGHT = height <=736?height * 0.1:height * 0.15;
  const SNAP_TOP = 0;
  const SNAP_BOTTOM = height - MINIMIZED_PLAYER_HEIGHT - 20;

  const gestureHandler = onGestureEvent({
    translationY,
    velocityY,
    state
  })
  const translateY = clamp(withSpring({
    state,
    value: translationY,
    velocity: velocityY,
    snapPoints: [SNAP_TOP, SNAP_BOTTOM],
    config
  }), SNAP_TOP, SNAP_BOTTOM);


  const opacity = interpolate(translateY, {
    inputRange: [SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP
  });

  const opacity2 = interpolate(translateY, {
    inputRange: [
      SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT * 2,
      SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT
    ],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP
  });

  const clock = new Clock();
  useCode(
    block([
      cond(goUp, [
        set(
          offset,
          timing({
            clock,
            from: offset,
            to: SNAP_TOP
          })
        ),
        cond(not(clockRunning(clock)), [set(goUp, 0)])
      ]),
      cond(goDown, [
        set(
          offset,
          timing({
            clock,
            from: offset,
            to: SNAP_BOTTOM
          })
        ),
        cond(not(clockRunning(clock)), [set(goDown, 0)])
      ])
    ]),
    []
  );

  const openAnimation = () => {
    goDown.setValue(1)
  }

  useEffect(() => {
 
  }, [gestureHandler])

  return (

    <PanGestureHandler {...gestureHandler}>
      <Animated.View style={{
        height: Platform.OS == "ios" ? null : height, flex: Platform.OS == "ios" ? 1 : null,
        backgroundColor: 'cyan',
        justifyContent: 'center', backgroundColor: "transparent", transform: [{ translateY }]
      }}>

        <AudioPlayer
          // ministatus={props.ministatus}
          Advertisement={props.Advertisement}
          onPressCancel={() => openAnimation()} item={Songlist} />

        <Animated.View
          pointerEvents="none"
          style={{
            opacity: opacity2,
            backgroundColor: "White",
            borderWidth: 0.8,
            borderRadius: 5,
            borderColor: "lightgray",
            ...StyleSheet.absoluteFillObject,
            // ...StyleSheet.absoluteFill
          }}
        />
        <Animated.View
          style={{
            opacity,
            backgroundColor: "White",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "lightgray",
            height: MINIMIZED_PLAYER_HEIGHT,
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <MiniPlayer onPress={() => goUp.setValue(1)} />
        </Animated.View >
      </Animated.View>
    </PanGestureHandler>

  );
})
export default AnimationMusic


