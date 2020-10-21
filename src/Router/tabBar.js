import React,{ useState, useEffect } from "react";
import { AppView, Touchable, AppImage, AppText } from "../components/atoms"
import style from "../styles/index"
// import { Homeinactive, mediainactive, Homeactive, covidinactive, selfinactive, selfactive, mediaactive, covidactive, profileActive } from "../assets/index"
import { Actions } from "react-native-router-flux";
import { THEME, PURPLE } from "../styles/colors";
import { useSelector } from 'react-redux';
import { inactiveradio, activeradio, activemusiclis, inactivemusiclist, activemenu, inactivemenu } from "../assets";
export default tabbar = () => {
    const state = useSelector(state => state).reducer;
    const {
        Your_Status,
        Donate_Plasma,
        Covid_19,
        Assess_Again


    } = state.language

        let [current, setCurrent] = useState(0);
    
 
    return (
        <AppView style={style.tabbar}>
            <AppView style={style.tabbarContainer}>
                <Touchable style={{alignItems: 'center',}} onPress={()=>{setCurrent(0),Actions.Home()}}>
                    <AppImage style={{width:25,height:25}}source={current === 0 ? activeradio : inactiveradio} />
                   
                </Touchable>
                <Touchable  style={{alignItems: 'center',}} onPress={()=>{setCurrent(1),Actions.Tabcuemusic()}}>
                    <AppImage style={{width:32,height:32}}source={current === 1 ? activemusiclis : inactivemusiclist} />
                    
                </Touchable> 
                 <Touchable  style={{alignItems: 'center',}} onPress={()=>{setCurrent(2),Actions.Setting()}}>
                    <AppImage style={{width:25,height:25}}source={current === 2 ?activemenu : inactivemenu} />
                
                </Touchable> 
               
            </AppView>
        </AppView>
    )
}