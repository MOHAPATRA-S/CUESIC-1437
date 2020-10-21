import React from 'react'
import { Image, Text, View, TouchableOpacity, Modal,ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image'
import styles from '../../styles';
const AppbackgraoundImage = (props) => (
    <ImageBackground source={props.source} style={props.style} >{props.children}</ImageBackground>)

const AppImage = (props) => (
    <Image resizeMode="contain" source={props.source} style={props.style} />)

const AppFastImage = (props) => (
    <FastImage source={props.source} style={props.style} />)

const AppText = (props) => (
    <Text  {...props} style={[styles.defaultText, props.style]}>{props.children}</Text>)

const AppView = (props) => (
    <View style={props.style}>{props.children}</View>)

const Touchable = (props) => (
    <TouchableOpacity {...props} onPress={props.onPress} style={[props.style]}>{props.children}</TouchableOpacity>)

const TouchableIn = (props) => (
    <TouchableOpacity onPressIn={props.onPressIn} style={[props.style]}>{props.children}</TouchableOpacity>)

const AppModal = (props) => (
    <Modal  visible={props.visible} animationType={props.animationType || "slide"} transparent={true}>{props.children}</Modal>)

export {
    AppImage,
    AppText,
    AppView,
    Touchable,
    TouchableIn,
    AppFastImage,
    AppModal,
    AppbackgraoundImage
}