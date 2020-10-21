
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Clipboard } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { Input, CustomButton, Drop_Down_Modal_forall } from '../../components/molecules';
import { graybutton, copy, profile_icon, logout_icon, Account_icon, aboutus_icon, contactus_icon } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';

export default Setting = (props) => {
    const state = useSelector(state => state).reducer;
    const {
        Settings,
        Profile,
        Profile_status,
        Account_Management,
        Account_status,
        Contact_us,
        contact_status,
        About_us,
        Logout,
        Delete_Status,
        LogOut
    } = state.language
    let [logoutmodal, setlogoutmodal] = useState(false);
    let [inbuiltstate, setState] =
        useState({
            radiostation: "",
            Linkmodal: false,
            name: "",
            nameError: "",
            nameStatus: false,

        });
    useEffect(() => {

        // setState({ ...inbuiltstate, radiostation: Musicstationlist })

    }, [])


    return (
        <Container scrollable Withoutimage header backOnly title={Settings}>
            <AppView style={{ top: 40 }}>
                <Touchable onPress={()=>Actions.Profile()} style={style.thinView}>
                    <AppImage style={{ width: 25, height: 30, }} source={profile_icon} />


                    <AppView style={{width: width * 0.8, alignSelf: 'center',  height: height * 0.12, }}>
                        <AppText style={[style.normalText, { fontSize: 20,fontWeight: 'normal',left: 25, }]}>
                            {Profile}
                        </AppText>
                        <AppText style={[style.normalText, { fontWeight: 'normal', fontSize: 13,left: 25, }]}>
                            {Profile_status}
                        </AppText>
                    </AppView>
                </Touchable>
                <Touchable onPress={()=>Actions.Account()} style={style.thinView}>
                    <AppImage style={{ width: 25, height: 30, }} source={Account_icon} />


                    <AppView style={{ width: width * 0.8, alignSelf: 'center',  height: height * 0.12, }}>
                        <AppText style={[style.normalText, { fontSize: 20 ,fontWeight: 'normal',left: 25,}]}>
                            {Account_Management}
                        </AppText>
                        <AppText style={[style.normalText, { fontWeight: 'normal', fontSize: 13,left: 25,  }]}>
                            {Account_status}
                        </AppText>
                    </AppView>
                </Touchable>

                <Touchable onPress={()=>Actions.Contactus()} style={style.thinView}>
                    <AppImage style={{ width: 25, height: 30, top: 2 }} source={contactus_icon} />


                    <AppView style={{ width: width * 0.8, alignSelf: 'center', left: 15, height: height * 0.12, }}>
                        <AppText style={[style.normalText, { fontSize: 20,fontWeight: 'normal',left: 10, }]}>
                            {Contact_us}
                        </AppText>
                        <AppText style={[style.normalText, { fontWeight: 'normal',fontSize: 13,left: 10, }]}>
                            {contact_status}
                        </AppText>
                    </AppView>
                </Touchable>
                <Touchable onPress={()=>Actions.Aboutus()} style={[style.thinView,{height: height * 0.1,}]}>
                    <AppImage style={{ width: 25, height: 30 }} source={aboutus_icon} />


                    <AppView style={{ width: width * 0.8, alignSelf: 'center', left: 15, height: height * 0.1, }}>
                        <AppText style={[style.normalText, { fontSize: 20,fontWeight: 'normal',left: 10, }]}>
                            {About_us}
                        </AppText>

                    </AppView>
                </Touchable>
                <Touchable onPress={()=>setlogoutmodal(true)}
                style={[style.thinView,{height: height * 0.1,}]}>
                    <AppImage style={{ width: 25, height: 30 }} source={logout_icon} />
                    <AppView style={{ width: width * 0.8, alignSelf: 'center', left: 15, height: height * 0.1, }}>
                        <AppText style={[style.normalText, { fontSize: 20,fontWeight: 'normal',left: 10, }]}>
                            {Logout}
                        </AppText>

                    </AppView>
                </Touchable>
                <Drop_Down_Modal_forall
                visible={logoutmodal}
                headertest={LogOut}
                textbyown={Delete_Status}
                textno="No"
                textyes="Yes"
                onPressClose={()=>setlogoutmodal(false)}
                onPressno={()=>setlogoutmodal(false)}
                onPressyes={()=>{setlogoutmodal(false);AsyncStorage.removeItem("userToken");Actions.Login()}}
                />
            </AppView>


        </Container>



    )

}