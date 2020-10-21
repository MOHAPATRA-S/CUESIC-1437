import React, { useState, useEffect, useMemo, memo } from 'react';
import { Dimensions, FlatList, Image, PermissionsAndroid, Platform, Share, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { Input, CustomButton } from '../../components/molecules';
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { facebook, instagram, google, activetick, inactivetick, friendsprofile, emtyicon } from '../../assets';
import { ShareDialog } from 'react-native-fbsdk';
import Contacts from 'react-native-contacts';
import AsyncStorage from '@react-native-community/async-storage';
import { Getprofile, clearAction, SentInvitation } from '../../Action/Action';
let Token 
let contactForinvite = []
// import Contact from "../../components/contactlist"
export default InviteFriends = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    Contacts.iosEnableNotesUsage(true);
    const {
        successinitation,
        Invite_your_Friends,
        invite_status,
        Continue
    } = state.language
    let [isRefresh, setisRefresh] = useState(false);
    let [inbuiltstate, setState] =
        useState({
            contactlist: "",
            successmodal: false,
            username: "",
            invitelist: ""


        });
    useEffect(() => {
        if (Platform.OS === "android") {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: "Contacts",
                message: "This app would like to view your contacts."
            }).then(() => {
                loadContacts();
            });
        } else {
            loadContacts();
        }
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {


                Token = JSON.parse(resp)


                dispatch(Getprofile(Token))
            }
        })

    }, [])


    const loadContacts = () => {
        Contacts.getAll((err, contacts) => {
            if (err === "denied") {
            } else {
                contacts.sort(function (a, b) {
                    if (a.displayName < b.displayName) { return -1; }
                    if (a.displayName > b.displayName) { return 1; }
                    return 0;
                })

                setState({ ...inbuiltstate, contactlist: contacts, });
            }
        });
        Contacts.getCount(count => {
            //   this.setState({ searchPlaceholder: `Search ${count} contacts` });
        });
    }

    const selctfrnd = (item) => {
        item.status = !item.status
        setisRefresh(!isRefresh)
        if (item.status == true) {
            contactForinvite.push(item.phoneNumbers[0].number.includes("+91") ? item.phoneNumbers[0].number : `+91${item.phoneNumbers[0].number}`)
            setState({ ...inbuiltstate, invitelist: contactForinvite })
        }
        else {
            let adddata = item.phoneNumbers[0].number.includes("+91") ? item.phoneNumbers[0].number : `+91${item.phoneNumbers[0].number}`
            let a = inbuiltstate.invitelist.filter(ele => adddata != ele ? true : false)
            setState({ ...inbuiltstate, invitelist: a })
        }
    }
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `
                You have received an invitation from ${inbuiltstate.username} to join his mussic session on Cuesic App. Your party code is- ${props.generatecode}`

            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                    consple.log("shared with activity type of result.activityType")
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    useEffect(() => {

        switch (state.case) {
            case "GETPROFILE_SUCCESS":

                setState({
                    ...inbuiltstate,
                    username: state.getprofileDetail.name
                    // numberofsession
                    // hoursplayed:
                })
                dispatch(clearAction())

                break;
            case "GETPROFILE_FAILURE":

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

            case "INVITE_SUCCESS":
               { setState({ ...inbuiltstate, successmodal: true });
                    setTimeout(() => {
                        setState({ ...inbuiltstate, successmodal: false })
                        Actions.Sessionfriendjoin()
                    }, 2000);}

                dispatch(clearAction())

                break;
            case "INVITE_FAILURE":

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
    // const memoizedValue = useMemo(() => renderItem, [inbuiltstate.contactlist]);
    const contact_list = ({ item }) => {
        return (
            item.phoneNumbers.length > 0 ?
                <Contact
                    contactpic={item.phoneNumbers.length > 0 && item.thumbnailPath ? { uri: item.thumbnailPath } : friendsprofile}
                    displayname={item.phoneNumbers.length > 0 ? item.displayName : ""}
                    mobilenumber={item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : ""}
                    onPress={() => selctfrnd(item)}
                    tickimage={item.status === true ? activetick : inactivetick}
                /> :
                null
            // item.phoneNumbers.length > 0 ?
            //     <AppView>
            //         { console.log("dghbghgbcf")    }
            //         <AppView style={style.unselectedLayout}>
            //             <AppView style={{
            //                 flexDirection: 'row',
            //                 alignItems: 'center',
            //             }}>
            //                 <Image
            //                     style={{ marginHorizontal: 5, width: 50, height: 50, borderRadius: 25, }}
            //                     source={item.phoneNumbers.length > 0 && item.thumbnailPath ? { uri: item.thumbnailPath } : friendsprofile} />
            //                 <AppView>
            //                     <AppText style={[style.normalText, { fontWeight: "bold", left: 10 }]}>
            //                         {item.phoneNumbers.length > 0 ? item.displayName : ""}
            //                     </AppText>
            //                     <AppText style={[style.normalText, { fontWeight: "normal", left: 10 }]}>
            //                         {item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : ""}
            //                     </AppText>
            //                 </AppView>
            //             </AppView>
            //             <Touchable onPress={() => selctfrnd(item)}>
            //                 <AppImage source={item.status === true ? activetick : inactivetick} style={{
            //                     width: 30, height: 30,
            //                     right: 10
            //                 }}>
            //                 </AppImage>
            //             </Touchable>
            //         </AppView>
            //     </AppView>
            //     :
            //     null
        )
    }
    const Contact = memo(props => {
        return (
            <AppView>
               
                <AppView style={style.unselectedLayout}>
                    <AppView style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{ marginHorizontal: 5, width: 50, height: 50, borderRadius: 25, }}
                            source={props.contactpic}
                        />
                        <AppView>
                            <AppText style={[style.normalText, { fontWeight: "bold", left: 10 }]}>
                                {props.displayname}
                                {/* {item.phoneNumbers.length > 0 ? item.displayName : ""} */}
                            </AppText>
                            <AppText style={[style.normalText, { fontWeight: "normal", left: 10 }]}>
                                {props.mobilenumber}
                            </AppText>
                        </AppView>

                    </AppView>

                    <Touchable onPress={props.onPress}
                    >
                        <AppImage
                            source={props.tickimage}

                            style={{
                                width: 30, height: 30,
                                right: 10
                            }}>
                        </AppImage>
                    </Touchable>
                </AppView>
            </AppView>
        )
    })
    const closeModal = () => {
       if(inbuiltstate.invitelist.length>0){

         // let invitationDetails = {
        //     contacts:inbuiltstate.invitelist,
        //     generateCode: props.generatecode,
        //     partyName: props.partyname
        // }
        // dispatch(SentInvitation(invitationDetails, Token))
       }
       else{
       { setState({ ...inbuiltstate, successmodal: true });
        setTimeout(() => {
            setState({ ...inbuiltstate, successmodal: false })
            Actions.Sessionfriendjoin()
        }, 2000);}
       }
       
    }
    return (
        <Container
            backnavigate={() => Actions.pop()}
            title={Invite_your_Friends} Withoutimage header>
            <AppView style={{ flex: 1, justifyContent: 'flex-end', }}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>

                    <AppView style={style.firstcontainer}>
                        <AppText style={[style.normalText, { marginTop: 15, fontSize: 20, bottom: 15 }]}>
                            {invite_status}
                        </AppText>
                    </AppView>


                    <AppView style={{
                        height: height * 0.48,
                        width: width,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {
                            inbuiltstate.contactlist.length === 0 ?

                           
                                    <AppImage  source={emtyicon}/>
                                 

                                :
                                <FlatList
                                    shouldComponentUpdate={(props, nextProps) => {
                                        return props.item !== nextProps.item

                                    }}
                                    showsVerticalScrollIndicator={false}
                                    data={inbuiltstate.contactlist}
                                    renderItem={(item, index) => contact_list(item, )}
                                    // renderItem={memoizedValue}
                                    keyExtractor={item => item.id}
                                    onEndReachedThreshold={2000}

                                // numColumns={2}
                                />

                        }
                    </AppView>

                    <AppView style={{
                        marginTop: 40,
                        alignItems: 'center',
                        paddingBottom: scaleHeight(50),
                        // justifyContent: 'center',
                    }} >
                        <CustomButton
                            onPress={() => {
                                closeModal()
                            }}

                            buttonText={Continue}
                            textstyle={[style.normalText, { fontSize: 20, color: WHITE, }]}

                        />

                    </AppView>
                    <AppModal
                        animationType='fade'
                        visible={inbuiltstate.successmodal}>
                        <AppView
                            //  onPressIn={() => setState({ ...inbuiltstate, successmodal: false }) }
                            style={style.mainContainer} >
                            <AppView style={style.Modalcontainer}>
                                <AppText style={[style.normalText, { fontSize: 18, fontWeight: 'normal', textAlign: "center" }]} >
                                    {successinitation}
                                </AppText>
                            </AppView>
                        </AppView>
                    </AppModal>
                </KeyboardAwareScrollView>
                <AppView style={style.invitefrnd} >
                    <AppText style={[style.normalText, { fontSize: 15, fontWeight: 'normal', }]}>
                        {Invite_your_Friends}
                    </AppText>
                    <AppView style={{
                        // height: height * 0.,
                        width: width * 0.7,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // backgroundColor: "yellow",
                    }}>
                        <Touchable onPress={() => onShare()} >
                            <AppImage
                                style={{ width: width * 0.2, height: height * 0.08, }}
                                source={facebook} />
                        </Touchable>
                        <Touchable onPress={() => onShare()} >
                            <AppImage style={{ width: width * 0.2, height: height * 0.08, }}
                                source={google} />
                        </Touchable>
                        <Touchable onPress={() => onShare()} >
                            <AppImage style={{ width: width * 0.2, height: height * 0.08, }}
                                source={instagram} />
                        </Touchable>
                    </AppView>
                </AppView>
            </AppView>
        </Container>
    )
}