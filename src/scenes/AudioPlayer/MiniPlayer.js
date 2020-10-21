import React,{useState,useEffect} from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from "react-native";
import { WHITE, Error_Red } from "../../styles/colors";
import { miniplay } from "../../assets";
import Controls from "./Controls";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  },
  text: {
    // color: "white"
  }
});


export default MiniPlayer = (props) => {

  let[inbuiltstate,setState]= useState({
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
  return (
    <TouchableOpacity style={{ height: height * 0.1,  }} onPress={props.onPress}>
      <View style={styles.container}>
        {/* <Icon name="heart" color="white" size={24} /> */}
        <Text style={styles.text}>Metronomy - The Bay</Text>
        <TouchableOpacity onPress={props.onPressmini} >
          <Image source={miniplay} style={{width:30,height:30,right:10}}/>
        </TouchableOpacity>
      
      </View>
    </TouchableOpacity>
  );
};
