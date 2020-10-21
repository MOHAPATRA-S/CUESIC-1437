
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, FlatList } from "react-native"
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

import { graybutton, Spotify, Applemusic, googlemusic, amazonmusic, blackcross } from '../../assets';
import { Input, CustomButton, Drop_Down_Modal } from '../../components/molecules';
import { handleValidations } from './validate';
export default Home = (props) => {
    const state = useSelector(state => state).reducer;
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
            disablebutton: true
        });
    useEffect(() => {

        // setState({ ...inbuiltstate, radiostation: Musicstationlist })

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
    const radio_list = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (

            <AppView>
                <Touchable onPress={() => setState({ inbuiltstate, Linkmodal: true })}>
                    <ImageBackground resizeMode="contain"
                        style={{
                            height: height * 0.15,
                            width: width * 0.4,
                            alignSelf: 'center',
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        source={item.radiostation_image} >
                        <AppText style={[style.normalText, {

                            color: WHITE,
                            width: width * 0.3,
                            textAlign: 'center',
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
                setState({ ...inbuiltstate, Linkmodal: false, disablebutton: false })
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
                    Welcome, John Doe
                 </AppText>
            </AppView>
            {/* <KeyboardAwareScrollView
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}> */}
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
                }}>
                    {
                        Musicstationlist.length === 0 ?

                            <AppText style={[style.normalText]}>
                                No records found!
                            </AppText>

                            :
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={Musicstationlist}
                                renderItem={(item, index) => radio_list(item, index)}
                                keyExtractor={item => item.id}
                                numColumns={2}
                            />

                    }
                </AppView>
                <Touchable
                    disabled={inbuiltstate.disablebutton}
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

                    disabled={inbuiltstate.disablebutton}
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
                <TouchableIn onPressIn={() => setState({ ...inbuiltstate, Linkmodal: false })} style={style.mainContainer} >
                    <AppView style={style.Modalcontainer}>
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
                </TouchableIn>
            </AppModal>
            {/* </KeyboardAwareScrollView> */}

        </Container>



    )

}