
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, FlatList, Alert } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { Musicstationlist } from "../../components/commomList"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { graybutton,  blackcross } from '../../assets';
import { Input, CustomButton, } from '../../components/molecules';
import { handleValidations } from './validate';
import { Getprofile, clearAction,Linklibrary } from '../../Action/Action';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { normalizeFont } from '../../styles/responsive';
import Spotify from 'rn-spotify-sdk';

let Token
export default Home = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()

    const {
        Home_status,
        Host_session,
        join_session,
        Link_yourapp,
        Link_account,
        Mobile_Number_email_address,
        Password,
        Emailorphone_emptyerror,
        Password_error,

    } = state.language
    let [Remeberme, setRemeberme] = useState(false);
    let [inbuiltstate, setState] =
        useState({
            radiostation: "",
            Linkmodal: false,
            successmodal: false,
            email: "",
            emailError: "",
            emailStatus: false,
            password: "",
            passwordStatus: false,
            passwordError: '',
            username: "",
            typelibrary:"",
            spotifyInitialized: false

        });
    //    spotifyLoginButtonWasPressed = spotifyLoginButtonWasPressed.bind(this)
         const initializeIfNeeded=async()=> {
            // initialize Spotify if it hasn't been initialized yet
            if(!await Spotify.isInitializedAsync()) {
                // initialize spotify
                const spotifyOptions = {
                    "clientID":"70fd0f12c8d04a33a235a498c22a5e3a",
                    "sessionUserDefaultsKey":"SpotifySession",
                    "redirectURL":"examplespotifyapp://auth",
                    "scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
                };
                const loggedIn = await Spotify.initialize(spotifyOptions);
                // update UI state
            setState({...inbuiltstate,
                    spotifyInitialized: true
                });
                // handle initialization
                if(loggedIn) {
                    // this.goToPlayer();
                    Spotify.getMe().then((result) => {
                        // update state with user info
                       console.log("resultresultresult=>>>useeffect",result)
                        // play song
                        // return Spotify.playURI("spotify:track:2zk7TQx9Xa4yxYmsjgDCPp", 0, 0);
                    }).then(() => {
                        // success
                    }).catch((error) => {
                        // error
                        Alert.alert("Error", error.message);
                    });
                }
            }
            else {
                // update UI state
               setState({...inbuiltstate,
                    spotifyInitialized: true
                });
                // handle logged in
                if(await Spotify.isLoggedInAsync()) {
                    // this.goToPlayer();
                    Spotify.getMe().then((result) => {
                        // update state with user info
                       console.log("resultresultresult=>>>",result)
                        // play song
                        // return Spotify.playURI("spotify:track:2zk7TQx9Xa4yxYmsjgDCPp", 0, 0);
                    }).then(() => {
                        // success
                    }).catch((error) => {
                        // error
                        Alert.alert("Error", error.message);
                    });
                }
            }
        }




       const spotifyLoginButtonWasPressed=()=> {
            // log into Spotify
            Spotify.login().then((loggedIn) => {
                if(loggedIn) {
                    // logged in
                    console.log("okkkk")
                    // this.goToPlayer();
                    Spotify.getMe().then((result) => {
                        // update state with user info
                       console.log("resultresultresult=>>>loggg",result)
                        // play song
                        // return Spotify.playURI("spotify:track:2zk7TQx9Xa4yxYmsjgDCPp", 0, 0);
                    }).then(() => {
                        // success
                    }).catch((error) => {
                        // error
                        Alert.alert("Error", error.message);
                    });
                }
                else {
                    // cancelled
                }
            }).catch((error) => {
                // error
                Alert.alert("Error", error.message);
            });
        }


    useEffect(() => {
        initializeIfNeeded().catch((error) => {
			Alert.alert("Error", error.message);
		});
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
                dispatch(Getprofile(Token))
            }
        })
    }, [])
    const handlevalidate = async (text, type) => {
        let status = `${type}Status`;
        let errorText = `${type}Error`;
        let resp = handleValidations(text, type)
        await setState({
            ...inbuiltstate,
            [type]: resp.value,
            [errorText]: resp.errorText,
            [status]: resp.status,
        })

    }
    useEffect(() => {
        switch (state.case) {
            case "GETPROFILE_SUCCESS":
                setState({
                    ...inbuiltstate,
                    username: state.getprofileDetail.name,

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
                case "LINKLIBRARY_SUCCESS":
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
                case "_FAILURE":
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
    const librarylinkApi = () => {
      let librarycredential={
        type :inbuiltstate.typelibrary ,
        email : inbuiltstate.email,
        password : inbuiltstate.password
      }
      console.log("texttt==>>>",librarycredential)
        dispatch(Linklibrary(librarycredential,Token))

    }
    const radio_list = ({ item,  }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (

            <AppView>
                <Touchable onPress={() => item.title == "Spotify" ? spotifyLoginButtonWasPressed() : setState({ ...inbuiltstate, Linkmodal: true,typelibrary:item.title })}>
                    <ImageBackground resizeMode="contain"
                        style={{
                            height: height * 0.11,
                            width: width * 0.3,
                            alignSelf: 'flex-start',
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: 10,
                        }}
                        source={item.radiostation_image} >
                        <AppText style={[style.normalText, {

                            color: WHITE,
                            width: width * 0.25,
                            textAlign: 'center',
                            fontSize: normalizeFont(14),
                        }]} >
                            {item.title}
                        </AppText>
                    </ImageBackground>
                </Touchable>

            </AppView>

        )
    }
    const submit = () => {
        if (inbuiltstate.emailStatus) {
            if (inbuiltstate.passwordStatus) {
               { setState({ ...inbuiltstate, Linkmodal: false, });
                    librarylinkApi()}
            }
            else {
                setState({ ...inbuiltstate, passwordstatus: false, passwordError: Password_error, })
            }
        }
        else { setState({ ...inbuiltstate, emailstatus: false, emailError: Emailorphone_emptyerror, }) }
    }
    return (


        <Container Withoutimage={false} header={false}>
            <AppView style={style.firstcontainer}>
                <AppText style={[style.normalText, { marginTop: 15, fontSize: 20 }]}>
                    Welcome, {inbuiltstate.username}
                </AppText>
            </AppView>

            <AppView style={style.whiteBack}>

                <AppView style={{
                    height: height * 0.1,
                    width: width * 0.8,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <AppText style={[style.normalText, { fontSize: 16, fontWeight: "bold", marginTop: 20, }]}>
                        {Home_status}
                    </AppText>
                </AppView>
                <AppView style={{
                    height: height * 0.45,
                    width: width * 0.8,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: "red",
                }}>
                    {
                        Musicstationlist.length === 0 ?

                            <AppText style={[style.normalText]}>
                                No records found!
                                  </AppText>

                            :
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={Musicstationlist}
                                renderItem={(item, index) => radio_list(item, )}
                                keyExtractor={item => item.id}
                                numColumns={2}
                            />
                    }
                </AppView>
                <Touchable
                    onPress={() => Actions.Hostsession()}
                >
                    <ImageBackground resizeMode="contain" style={{
                        width: width * 0.7,
                        height: height * 0.08,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 10
                    }} source={graybutton}>
                        <AppText style={[style.normalText, { fontSize: 18, color: BLACK }]}>
                            {Host_session}
                        </AppText>
                    </ImageBackground >
                </Touchable>
                <Touchable

                    onPress={() => Actions.Joinsession()}
                >
                    <ImageBackground resizeMode="contain" style={{
                        width: width * 0.7,
                        height: height * 0.08,
                        alignItems: "center",
                        justifyContent: "center"
                    }} source={graybutton}>
                        <AppText style={[style.normalText, { fontSize: 18, color: BLACK }]}>
                            {join_session}
                        </AppText>
                    </ImageBackground >
                </Touchable>
            </AppView>

            <AppModal
                animationType='fade'
                visible={inbuiltstate.Linkmodal}>
                <AppView style={style.mainContainer} >
                    <AppView style={[style.Modalcontainer, {  }]}>
                        <AppView
                            style={{
                                width: width * 0.8,
                                height: height * 0.05,
                                flexDirection: 'row',
                                alignSelf: 'center',
                                marginBottom: 5,
                                justifyContent: 'space-between',

                            }}
                        >
                            <AppText style={[style.normalText, {
                                fontSize: 18,
                                color: BLACK,
                                marginLeft: 10,
                            }]}>
                                {Link_yourapp}
                            </AppText>
                            <Touchable onPress={() => setState({ ...inbuiltstate, Linkmodal: false })}>
                                <AppImage style={{ width: 18, height: 18 }} source={blackcross} />
                            </Touchable>

                        </AppView>

                        <Input
                            placeholder={Mobile_Number_email_address}
                            Inputcontainer={style.Inputcontainer}
                            Errorstyle={{ width: width * 0.75, }}
                            onChangeText={(text) => handlevalidate(text, "email")}
                            style={{
                                borderRadius: 0,
                                width: width * 0.75,
                                borderColor: GRAY,
                                height: inbuiltstate.emailError ? hp("5%") : hp("6%"),
                            }}

                            errortext={inbuiltstate.emailError}
                        />
                        <Input
                            secure
                            placeholder={Password}
                            Errorstyle={{ width: width * 0.75, }}
                            style={{
                                borderRadius: 0,
                                width: width * 0.75,
                                borderColor: GRAY,
                                height: inbuiltstate.passwordError ? hp("5%") : hp("6%"),

                            }}
                            errortext={inbuiltstate.passwordError}
                            onChangeText={(text) => handlevalidate(text, "password")}
                        />
                        <CustomButton
                            onPress={() => submit()}
                            style={{ width: width * 0.75 }}
                            buttonText={Link_account}
                            textstyle={[style.normalText, { fontSize: 20, color: WHITE }]}
                        />

                    </AppView>
                </AppView>
            </AppModal>


        </Container>
    )

}