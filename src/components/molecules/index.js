import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, ImageBackground, Image, Platform } from "react-native"
import { AppView, Touchable, AppText, AppImage, AppModal, TouchableIn, AppbackgraoundImage } from "../atoms/index";
import style from '../../styles'
import { backIcon, loginButton, smallbuttonno, smallbuttonyes, blackcross, Profilebackicon, backcross, fixbutton, bullet } from "../../assets/index";
import { Actions } from 'react-native-router-flux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from "react-native"
import { DarkGrey, BLACK, pink, WHITE, Error_Red, light_blue, GRAY } from '../../styles/colors';
import { useSelector, useDispatch } from 'react-redux';
const { height, width } = Dimensions.get('window');

const Header = (props) => {
    const state = useSelector(state => state).reducer;

    useEffect(() => {


    }, [])

    if (props.backOnly)
        return (
            <AppView style={[style.header, props.style]}>
                <Touchable style={style.sideContainer}>
                    {/* <AppImage style={style.back} source={back} /> */}
                </Touchable>
                <AppView style={style.headerTitleContainer}>
                    <AppText style={style.headerTitle}>{props.title}</AppText>
                </AppView>
                <Touchable style={style.sideContainer}>
                    {/* <AppImage source={back} /> */}
                </Touchable>
                <Touchable style={style.sideContainer}>
                    {/* <AppImage source={back} /> */}
                </Touchable>
            </AppView>
        )
    else return (
        <AppView style={[style.header, props.style]}>
            <Touchable onPress={
                props.backnavigate
                // () =>props.Paymentoptionback?Actions.Account():props.Acountback? Actions.Setting():props.croosback?props.backcrossfunc:Actions.pop()
            } style={style.sideContainer}>
                {props.nocroosback ? null :
                    <AppImage style={props.Profileback || props.backcrossicon ? style.extrback : style.back}
                        source={props.Profileback ? Profilebackicon : props.backcrossicon ? backcross : props.croosback ? blackcross : backIcon} />
                }

            </Touchable>
            <AppView style={style.headerTitleContainer}>
                <AppText style={props.backcrossicon || props.Profileback || props.nocroosback ? style.headerTitleextra : style.headerTitle}>{props.title}</AppText>
            </AppView>
            <AppView style={style.sideDoubleContainer}>
                <Touchable style={{ flexDirection: 'row', }} onPress={props.right_firstclik}>
                    <AppImage
                        source={props.right_first} />
                </Touchable>
                <Touchable onPress={props.right_secondclik} >
                    <AppImage style={{ width: 20, height: 20 }} source={props.right_second} />
                </Touchable>
            </AppView>

        </AppView>
    )
}

const Input = (props) => {
    return (
        <AppView style={[style.Inputcontainer, props.Inputcontainer]}>
            <AppView
                style={[style.inputLayout, props.style]}>
                {props.iconneed ?
                    <AppImage style={{
                        width: 25,
                        height: 25,
                        // width:width*0.1,
                        marginLeft: 25,
                    }} source={props.icon} /> : null}
                <TextInput
                    {...props}
                    placeholderTextColor="lightgray"
                    style={[style.textInput, props.textInput]}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secure || false}
                    
                />
            </AppView>
            <AppView style={[style.ErrorLayout, props.Errorstyle]}>
                <AppText style={[style.Errortextstyle, props.Errortextstyle]}>
                    {props.errortext}
                </AppText>
            </AppView>
        </AppView>

    )
}
const OTPInput = (props) => {
    return (
        <AppView
            style={[style.OTPInputLayout, props.style]}>
            <TextInput
                {...props}
                style={[style.OTPtextInput]}
                placeholder={props.placeholder}
                secureTextEntry={props.secure || false}
                ref={props.ref}
            />
        </AppView>
    )
}

const CustomButton = (props) => {
    return (
        <Touchable


            {...props}

            onPress={props.onPress}
            // disabled={props.disabled}
            style={[style.ButtonLayout, props.style]}>
            <AppbackgraoundImage style={[style.ButtonLayout, props.style]} source={loginButton}>
                <AppText style={props.textstyle}>{props.buttonText}</AppText>
            </AppbackgraoundImage>

        </Touchable>
    )
}
const Fixcomponent = (props) => {
    return (
        <AppView onPress={props.onPressfix} style={{
            position: Platform.OS == "ios" ? "absolute" : "absolute", alignItems: 'flex-end', width: width * 0.8, alignSelf: 'center',
        }}>
            <Touchable style={{
                width: 60, height: 70,
                zIndex: 2,
                // position:Platform.OS=="ios"?"absolute":"absolute", 
                bottom: Platform.OS == "ios" ? 15 : 30, right: 5
            }} onPress={props.onPressfix}>
                <AppImage
                    style={{
                        width: 60, height: 70,
                        position: Platform.OS == "ios" ? "absolute" : null, bottom: Platform.OS == "ios" ? 20 : null, right: 10
                    }} source={fixbutton} />

            </Touchable>
        </AppView>


    )
}
const SearchCustom = (props) => {
    return (
        <AppView
            style={[style.Searchlayout, props.Searchlayout]}>
            {/* <AppImage style={{ marginLeft: 8, }} source={Search} /> */}
            <TextInput
                style={[style.SearchInputlayout, props.SearchInputlayout]}
                {...props}
                placeholder="Search here"
                placeholderTextColor={GRAY}


            >
            </TextInput>
        </AppView>
    )
}
const StaticComponent = (props) => {
    return (
        <AppView
            style={{ alignItems: 'center', justifyContent: 'center', }}>
            <AppView
                style={{
                    alignItems: 'flex-start',
                    width: width * 0.87,
                    alignSelf: 'center',
                    flexDirection: 'row',
                   marginTop: 20,
                }}
            >
                <AppImage style={{
                    width: 18,
                    height: 18,
                    marginTop: 4,
                }} source={bullet} />
                <AppText style={[style.normalText, {
                    fontSize: 20,
                    marginLeft: 8,
                    fontWeight: 'bold',

                }]}>
                    {props.headerstatus}
                </AppText>
            </AppView>

            <AppText style={[style.normalText, { fontSize: 17, fontWeight: "normal", width: width * 0.8 }]}>
                {props.staticcontent}
            </AppText>
        </AppView>
    )
}

const Drop_Down_Modal = (props) => (
    <AppModal
        animationType='fade'
        visible={props.visible}>
        <TouchableIn onPressIn={() => props.onPressClose()} style={style.mainContainer} >
            <AppView style={style.Modalcontainer}>{props.children}

            </AppView>
        </TouchableIn>
    </AppModal>
)

const Drop_Down_Modal_forall = (props) => (

    <AppModal
        animationType='fade'
        visible={props.visible}>
        <TouchableIn onPressIn={() => props.onPressClose()} style={[style.mainContainer]} >
            <AppView style={[style.Modalcontainer,]}>
                <AppView style={{ justifyContent: 'flex-end', width: wp("80%"), alignItems: 'flex-end', top: 10 }}>
                    <AppImage style={{ width: 18, height: 18, }} source={blackcross} />
                </AppView>

                <AppView>

                    <AppText style={[style.defaultText, {
                        color: props.sessonManage ? light_blue : BLACK,
                        fontWeight: "bold",
                        fontSize: 20,
                        textAlign: "center",
                        top: 5
                        // marginBottom: 16,
                    }]}>
                        {props.headertest}
                    </AppText>
                    <AppView style={{ alignItems: "center", marginVertical: 20, width: wp("70%"), }}>

                        <AppText style={[style.defaultText, {
                            color: BLACK,
                            fontWeight: "400",
                            fontSize: 18,
                            textAlign: "center"
                        }]}>
                            {props.textbyown}
                        </AppText>
                    </AppView>
                    <AppView style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        // width: wp("70%"),

                        alignSelf: 'center',
                        alignItems: 'center',
                        // marginVertical: 10,
                    }}>
                        <Touchable
                            onPress={props.onPressno}
                        >
                            <ImageBackground resizeMode="contain" style={{
                                width: 150,
                                height: 45,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 10
                            }} source={smallbuttonno}>
                                <AppText style={[style.buttonTextstyle, { fontSize: props.sessonManage ? 16 : 20, color: BLACK, fontWeight: "bold" }]}>
                                    {props.textno}
                                </AppText>
                            </ImageBackground >
                        </Touchable>
                        <Touchable
                            onPress={props.onPressyes}
                        >
                            <ImageBackground resizeMode="contain" style={{
                                width: 150,
                                height: 46,
                                alignItems: "center",
                                justifyContent: "center",
                                top: 5
                            }} source={smallbuttonyes}>
                                <AppText style={[style.buttonTextstyle, { fontSize: props.sessonManage ? 16 : 20, color: WHITE, fontWeight: "bold" }]}>
                                    {props.textyes}
                                </AppText>
                            </ImageBackground >
                        </Touchable>
                    </AppView>
                </AppView>


            </AppView>
        </TouchableIn>
    </AppModal>
)

const Drop_Down_Modal_for_flatlist = (props) => (
    <AppModal
        animationType='fade'
        visible={props.visible}>
        <TouchableIn onPressIn={() => props.onPressClose()} style={style.mainContainer} >
            <AppView style={style.Modalcontainer}>
                <FlatList
                    data={props.data}
                    onRequestClose={() => console.log("modal has been closeds")}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <Touchable
                            onPress={() => props.onPress(item)
                            }
                            style={{
                                width: wp("70%"),
                                alignItems: 'center',
                                height: hp("6%"),
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            {/* <AppImage style={{ width: 20, height: 20, width: wp("20%") }} source={item.icon} /> */}
                            {/* <AppText style={{
                                color: DarkGrey, width: wp("20%")
                            }}>
                                {item.dialCode}
                            </AppText> */}
                            {/* {/* <AppText style={{ 
                      color: DarkGrey }}>
                    {item.title}
                  </AppText> */}
                            <AppText style={{
                                color: DarkGrey,
                                width: wp("50%")
                            }}>
                                {item.title}
                            </AppText>
                        </Touchable>

                    }

                />

            </AppView>
        </TouchableIn>
    </AppModal>
)


export {
    Header,
    Input,
    CustomButton,
    OTPInput,
    Drop_Down_Modal,
    Drop_Down_Modal_forall,
    Fixcomponent,
    Drop_Down_Modal_for_flatlist,
    SearchCustom,
    StaticComponent


}