import React, { useEffect } from 'react';
import { Router, Stack, Scene, Drawer, Actions, } from 'react-native-router-flux';
import Login from "../scenes/Login/index"
import Signup from "../scenes/Signup/index"
import Forgot from "../scenes/Forgotpassword/index"
import Resetpassword from "../scenes/Resetpassword/index"
import OtpVerification from "../scenes/OTP/index"
import Termcondition from "../scenes/Term&condition/index"
import tabBar from './tabBar';
import Home from '../scenes/Home/index';
import Hostsession from "../scenes/Hostsession/index"
import InviteFriends from "../scenes/Invitefriends/index"
import Sessionfriendjoin from "../scenes/Sessionfriendjoin/index"
import Joinsession from "../scenes/Joinsession/index"
import Setting from "../scenes/Setting/index"
import Aboutus from "../scenes/Aboutus/index"
import Contactus from "../scenes/Contactus/index"
import Account from "../scenes/Account/index"
import Paymentoption from "../scenes/Paymentoption/index"
import Changepassword from "../scenes/Changepassword/index"
import Addnewcard from "../scenes/Addnewcard/index"
import Profile from "../scenes/Profile/index"
import Playlistname from "../scenes/Playlistname/index"
import Myplaylist from "../scenes/Myplaylist/index"
import Musicscreen from "../scenes/Music/index"
import Cuemusic from "../scenes/Cuemusic/index"
import Mylibrary from "../scenes/Mylibrary/index"
import addPlayer from "../scenes/AudioPlayer/addplayer"
import Tabcuemusic from "../scenes/Tabcuemusic/index"
import AsyncStorage from '@react-native-community/async-storage';
import TabSessionFrind from "../scenes/TabSessionFrind/index"
import LinkView from "../scenes/Linkview/index"
const Navigation = (props) => {
    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Actions.Home()
            }
        })
    }, [])
    return (
        <Router >
            <Stack>
                <Scene initial panHandlers={null} hideNavBar key="Login" component={Login} />
                <Scene panHandlers={null} hideNavBar key="Signup" component={Signup} />
                <Scene panHandlers={null} hideNavBar key="Forgot" component={Forgot} />
                <Scene panHandlers={null} hideNavBar key="OtpVerification" component={OtpVerification} />
                <Scene panHandlers={null} hideNavBar key="Resetpassword" component={Resetpassword} />
                <Scene panHandlers={null} hideNavBar key="Termcondition" component={Termcondition} />
                <Scene panHandlers={null} hideNavBar key="InviteFriends" component={InviteFriends} />
                <Scene panHandlers={null} hideNavBar key="Hostsession" component={Hostsession} />
                <Scene panHandlers={null} hideNavBar key="Joinsession" component={Joinsession} />
                <Scene panHandlers={null} hideNavBar key="Sessionfriendjoin" component={Sessionfriendjoin} />
                <Scene panHandlers={null} hideNavBar key="Aboutus" component={Aboutus} />
                <Scene panHandlers={null} hideNavBar key="Contactus" component={Contactus} />
                <Scene panHandlers={null} hideNavBar key="Account" component={Account} />
                <Scene panHandlers={null} hideNavBar key="Changepassword" component={Changepassword} />
                <Scene panHandlers={null} hideNavBar key="Addnewcard" component={Addnewcard} />
                <Scene panHandlers={null} hideNavBar key="Profile" component={Profile} />
                <Scene panHandlers={null} hideNavBar key="Paymentoption" component={Paymentoption} />
                <Scene panHandlers={null} hideNavBar key="Musicscreen" component={Musicscreen} />
                <Scene panHandlers={null} hideNavBar key="Myplaylist" component={Myplaylist} />
                <Scene panHandlers={null} hideNavBar key="Playlistname" component={Playlistname} />
                <Scene panHandlers={null} hideNavBar key="Cuemusic" component={Cuemusic} />
                <Scene panHandlers={null} hideNavBar key="Mylibrary" component={Mylibrary} />
                <Scene panHandlers={null} hideNavBar key="addPlayer" component={addPlayer} />
                <Scene panHandlers={null} hideNavBar key="LinkView" component={LinkView} />
                
                <Scene panHandlers={null} key='tabBar' tabs hideNavBar tabBarComponent={tabBar}>
                    <Scene panHandlers={null} hideNavBar key="Home" component={Home} />
                    <Scene panHandlers={null} hideNavBar key="Tabcuemusic" component={Tabcuemusic} />
                    <Scene panHandlers={null} hideNavBar key="TabSessionFrind" component={TabSessionFrind} />
                    <Scene panHandlers={null} hideNavBar key="Setting" component={Setting} />
                </Scene>
            </Stack>
        </Router>
    )
}
export default Navigation
