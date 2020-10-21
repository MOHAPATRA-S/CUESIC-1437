import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Platform } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { halfbackground, cuejams, blackcross, halfbutton, bullet } from '../../assets';
import { Input, CustomButton } from '../../components/molecules';
import { WHITE, DarkGrey } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
const { height, width } = Dimensions.get('window');
import HTML from 'react-native-render-html';
import { Actions } from 'react-native-router-flux';
import { clearAction, Staticcontent } from '../../Action/Action';
let month
let year
let onlydate
export default Termcondition = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const {
        Terms_conditions,
        understand,
    } = state.language
    let [inbuiltstate, setState] =
        useState({
            updated: "",
            staticdetails: ""
        });
    useEffect(() => {
        let type = "T&C"
        dispatch(Staticcontent(type))
    }, [])
    useEffect(() => {
        switch (state.case) {
            case "STATICCONTENT_SUCCESS":
                const date = new Date(state.StaticDetails.updatedAt); 
                 month = date.toLocaleString('default', { month: 'long' });
           
                const d = new Date(state.StaticDetails.updatedAt);
                onlydate = d.getDate();
              
                const y = new Date(state.StaticDetails.updatedAt);
                 year = y.getFullYear();
              
                setState({ ...inbuiltstate, staticdetails: state.StaticDetails.description, })
                dispatch(clearAction())
                break;
            case "STATICCONTENT_FAILURE":
                Alert.alert(
                    "",
                    state.message,
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
                dispatch(clearAction())
                break;
        }

    }, [state])
    return (
        <Container header={false}>
            <AppImage style={{
                height: height * 0.2,
                width: width * 0.5,
                alignSelf: 'center',
            }}
                source={cuejams} />
            <AppView style={style.whiteBack}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    contentContainerStyle={{ alignItems: "center" }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>
                    <AppView style={{
                        height: height * 0.1,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        width: width,
                    }}>
                        <AppView style={{
                            height: height * 0.1,
                            alignItems: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            // flexDirection: 'row',
                            width: width * 0.85,
                        }}>
                            <AppText style={[style.normalText, { fontSize: 19, marginLeft: 30, }]}>
                                {Terms_conditions}
                            </AppText>
                            <AppText style={[style.normalText, { fontSize: 15, marginLeft: 30, fontWeight: 'normal', }]}>
                                Updateds {onlydate} {month} {year}
                            </AppText>
                        </AppView>
                        <Touchable
                            onPress={() => Actions.pop()}
                            style={{
                                width: width * 0.1,
                                height: height * 0.1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <AppImage style={{ width: 20, height: 20, right: 10 }} source={blackcross} />
                        </Touchable>
                    </AppView>
                    <AppView style={{ width: width * 0.85, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', }}>
                        <HTML html={inbuiltstate.staticdetails} style={[style.normalText, { fontSize: 17, fontWeight: "normal", }]} imagesMaxWidth={width * 0.85} />
                    </AppView>
                    <AppView style={style.understandcontainer}>
                        <Touchable
                            onPress={() => Actions.pop()}
                            textstyle={[style.normalText, { fontSize: 20, color: WHITE }]}
                        >
                            <ImageBackground resizeMode="contain" style={{
                                width: width * 0.4,
                                height: height * 0.08,
                                alignItems: "center",
                                justifyContent: "center"
                            }} source={halfbutton}>
                                <AppText style={[style.normalText, { fontSize: 20, color: WHITE }]}>
                                    {understand}
                                </AppText>
                            </ImageBackground >
                        </Touchable>
                    </AppView>
                </KeyboardAwareScrollView>
            </AppView>
        </Container>
    )

}