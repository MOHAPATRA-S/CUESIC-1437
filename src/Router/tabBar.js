import React,{ useState, useEffect } from "react";
import {  BackHandler, Alert } from "react-native";

import { AppView, Touchable, AppImage, AppText } from "../components/atoms"
import style from "../styles/index"
// import { Homeinactive, mediainactive, Homeactive, covidinactive, selfinactive, selfactive, mediaactive, covidactive, profileActive } from "../assets/index"
import { Actions } from "react-native-router-flux";
import { THEME, PURPLE } from "../styles/colors";
import { useSelector } from 'react-redux';
import { inactiveradio, activeradio, activemusiclis, inactivemusiclist, activemenu, inactivemenu, inactivesetting, activesetting } from "../assets";
export default tabbar = () => {
    const state = useSelector(state => state).reducer;
    const {
        Your_Status,
        Donate_Plasma,
        Covid_19,
        Assess_Again


    } = state.language

        let [current, setCurrent] = useState(0);
    useEffect(()=>{
        const backAction = () => {
            setCurrent(0);Actions.Home()
            // Alert.alert("Hold on!", "Are you sure you want to go back?", [
            //   {
            //     text: "Cancel",
            //     onPress: () => null,
            //     style: "cancel"
            //   },
            //   { text: "YES", onPress: () => BackHandler.exitApp() }
            // ]);

            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();
    },[])
 
    return (
        <AppView style={style.tabbar}>
            <AppView style={style.tabbarContainer}>
                <Touchable style={{alignItems: 'center',}} onPress={()=>{setCurrent(0);Actions.Home()}}>
                    <AppImage style={{width:25,height:25}}source={current === 0 ? activeradio : inactiveradio} />
                   
                </Touchable>
                <Touchable  style={{alignItems: 'center',}} onPress={()=>{setCurrent(1);Actions.Tabcuemusic()}}>
                    <AppImage style={{width:32,height:32}}source={current === 1 ? activemusiclis : inactivemusiclist} />
                    
                </Touchable> 
                 <Touchable  style={{alignItems: 'center',}} onPress={()=>{setCurrent(2);Actions.TabSessionFrind()}}>
                    <AppImage style={{width:25,height:25}}source={current === 2 ?activemenu : inactivemenu} />
                
                </Touchable> 
                <Touchable  style={{alignItems: 'center',}} onPress={()=>{setCurrent(3);Actions.Setting()}}>
                    <AppImage style={{width:25,height:25}}source={current === 3 ?activesetting : inactivesetting} />
                
                </Touchable> 
               
            </AppView>
        </AppView>
    )
}