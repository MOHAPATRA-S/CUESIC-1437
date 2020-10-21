
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Platform } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable } from '../../components/atoms';
import { halfbackground, cuejams, blackcross, halfbutton, bullet } from '../../assets';
import { Input, CustomButton } from '../../components/molecules';
import { WHITE, DarkGrey } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
const { height, width } = Dimensions.get('window');

import { Actions } from 'react-native-router-flux';


export default Termcondition = (props) => {
    const state = useSelector(state => state).reducer;
    const { 
        Terms_conditions,
        understand,
       
    } = state.language



    return (
        <Container  header={false}>

            <AppImage style={{
                height: height * 0.2,
                width: width * 0.5,
                alignSelf: 'center',
            }}
                source={cuejams} />
         
                <AppView style={style.whiteBack}>
                    <KeyboardAwareScrollView
                enableOnAndroid
                contentContainerStyle={{ alignItems:"center"}}
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
                                Updateds 23 jun 2020
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
                    <AppView
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.8,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: 'center',
                            // height:40
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
                            Overview
                            </AppText>
                    </AppView>
                    <AppText style={[style.normalText, { fontSize: 17, fontWeight: "normal", width: width * 0.8 }]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et
                        viverra justo commodo. Proin sodales pulvinar tempor.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
                        felis tellus mollis orci, sed rhoncus sapien nunc eget. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
                        sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum,
                        nulla luctus pharetra vulputate, felis tellus mollis orci,
                        sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                        Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Nam fermentum,
                        nulla luctus pharetra vulputate, felis tellus mollis orci,
                        sed rhoncus sapien nunc eget. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                        Proin sodales pulvinar tempor.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
                        felis tellus mollis orci, sed rhoncus sapien nunc eget.
                        </AppText>
                    <AppView
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.8,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            // justifyContent: 'center',
                            // height:40
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
                            Lorem ipsum dolor sit amet,
                            </AppText>
                    </AppView>
                    <AppText style={[style.normalText, { fontSize: 17, fontWeight: "normal", width: width * 0.8 }]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et
                        viverra justo commodo. Proin sodales pulvinar tempor.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
                        felis tellus mollis orci, sed rhoncus sapien nunc eget. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
                        sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum,
                        nulla luctus pharetra vulputate, felis tellus mollis orci,
                        sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                        Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Nam fermentum,
                        nulla luctus pharetra vulputate, felis tellus mollis orci,
                        sed rhoncus sapien nunc eget. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                        Proin sodales pulvinar tempor.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
                        felis tellus mollis orci, sed rhoncus sapien nunc eget.
                        </AppText>
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