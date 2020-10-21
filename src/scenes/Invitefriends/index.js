
import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, Image } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { Input, CustomButton } from '../../components/molecules';
import { Friendlist } from "../../components/commomList"
import { normalizeFont, scale, scaleHeight } from '../../styles/responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { facebook, instagram, google,activetick,inactivetick } from '../../assets';

export default InviteFriends = (props) => {
    const state = useSelector(state => state).reducer;
    const {
        successinitation,
        Invite_your_Friends,
        invite_status,
        Continue
    } = state.language
    let [isRefresh, setisRefresh] = useState(false);
    let [inbuiltstate, setState] =
    useState({
        
        successmodal:false,
      
       
    });
    useEffect(() => {

        // setState({ ...inbuiltstate, radiostation: Musicstationlist })

    }, [])
    const selctfrnd=(item)=>{
        item.status=!item.status
        setisRefresh(!isRefresh)
      
    }
    const contact_list = ({ item, index }) => {
        return (

            <AppView>
                <AppView style={style.unselectedLayout}>
                    <AppView style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{ marginHorizontal: 5, width: 50, height: 50, borderRadius: 25, }}
                            source={item.profile} />
                        <AppView>
                            <AppText style={[style.normalText, { fontWeight: "bold", left: 10 }]}>
                                {item.title}
                            </AppText>
                            <AppText style={[style.normalText, { fontWeight: "normal", left: 10 }]}>
                                {item.phno}
                            </AppText>
                        </AppView>

                    </AppView>

                    <Touchable onPress={() => selctfrnd(item)}>
                        <AppImage source={item.status===true ? activetick : inactivetick } style={{
                           width:30,height:30,
                            right: 10
                        }}>
                          
                        </AppImage>

                    </Touchable>
                </AppView>

            </AppView>

        )
    }
    return (
        <Container 
        backnavigate={()=>Actions.pop()}
        title={Invite_your_Friends} Withoutimage header>
            <AppView style={{flex:1, justifyContent: 'flex-end',}}>
            <KeyboardAwareScrollView
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}>

                <AppView style={style.firstcontainer}>
                    <AppText style={[style.normalText, { marginTop: 15, fontSize: 20, bottom:15}]}>
                        {invite_status}
                    </AppText>
                </AppView>


                <AppView style={{
                    height: height * 0.48,
                    width: width ,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {
                        Friendlist.length === 0 ?

                            <AppText style={[style.normalText]}>
                                No records found!
                            </AppText>

                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={Friendlist}
                                renderItem={(item, index) => contact_list(item, index)}
                                keyExtractor={item => item.id}
                            // numColumns={2}
                            />

                    }
                </AppView>

                <AppView style={{
                    marginTop: 40,
                    alignItems: 'center',
                    paddingBottom:scaleHeight(50) ,
                    // justifyContent: 'center',
                }} >
                    <CustomButton
                        onPress={() => setState({ ...inbuiltstate, successmodal: true })}

                        buttonText={Continue}
                        textstyle={[style.normalText, { fontSize: 20, color: WHITE, }]}

                    />
                     
                </AppView>
                <AppModal
                    animationType='fade'
                    visible={inbuiltstate.successmodal}>
                    <TouchableIn onPressIn={() => {setState({ ...inbuiltstate, successmodal: false }), Actions.Sessionfriendjoin()} }style={style.mainContainer} >
                        <AppView style={style.Modalcontainer}>
                            <AppText style={[style.normalText, { fontSize: 18, fontWeight: 'normal',textAlign:"center" }]} >
                            {successinitation}
                            </AppText>
                           </AppView>
                    </TouchableIn>
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
                        <Touchable >
                            <AppImage 
                            style={{ width: width*0.2, height: height*0.08, }}
                                source={facebook} />
                        </Touchable>
                        <Touchable >
                            <AppImage    style={{ width: width*0.2, height: height*0.08, }}
                                source={google} />
                        </Touchable>
                        <Touchable >
                            <AppImage    style={{ width: width*0.2, height: height*0.08, }}
                                source={instagram} />
                        </Touchable>
                    </AppView>
         </AppView>
       
            </AppView>
         
        </Container>
         



    )

}