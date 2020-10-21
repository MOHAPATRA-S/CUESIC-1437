import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Image,Dimensions,Alert } from 'react-native';
import { useSelector,useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, AppImage, } from '../../components/atoms';
import { Input, CustomButton } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import {confirminvitationlist}from "../../components/commomList"
import { Actions } from 'react-native-router-flux';
import {minus, emtyicon} from "../../assets/index"
import { light_blue } from '../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';
import { JoinMemberlist, clearAction, RemoveJoinMember,  } from '../../Action/Action';
let Token
let GenerateCode
export default Sessionfriendjoin = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const { Letsgo
    } = state.language
    const [inbuiltstate, setState] =
        useState({
            isFetching:false,
           joinMemberlist:"",
            hostName:"",
            partyName:"",
            generatedCode:""
        });

    useEffect(() => {
        AsyncStorage.getItem("userToken").then(resp => {
            if (JSON.parse(resp) != null) {
                Token = JSON.parse(resp)
                AsyncStorage.getItem("GENERATE_CODE").then(async resp => {
                    if (JSON.parse(resp) != null) {
        
                        GenerateCode = JSON.parse(resp)
                        let memberdetails =
                            { generatedCode: GenerateCode }
                        dispatch(JoinMemberlist(memberdetails,Token))
                    }
                })
              
            }
        })
    }, [])
    useEffect(() => {
        switch (state.case) {
            case "JOINMEMBER_SUCCESS":
                setState({ ...inbuiltstate,isFetching: false })
                setState({
                    ...inbuiltstate,
                    hostName:  state.joinmemebrDetails.hostName ,
                    partyName:  state.joinmemebrDetails.partyName ,
                    generatedCode: state.joinmemebrDetails.generatedCode,
                   joinMemberlist:state.joinmemebrDetails.joinSessionBy
                })
                dispatch(clearAction())
                break;
            case "JOINMEMBER_FAILURE":
                setState({ ...inbuiltstate,isFetching: false })
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
                case "REMOVEJOINMEMBER_SUCCESS":
                    dispatch(JoinMemberlist(Token))
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
                case "REMOVEJOINMEMBER_FAILURE":
                   
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
   
    const connected_list = ({ item,  }) => {
       
        return (

            <AppView>
                <AppView style={style.unselectedLayout}>
                    
                         <AppText style={[style.normalText, { fontWeight: "normal", left: 10 }]}>
                                {item}
                            </AppText>
                    <Touchable onPress={() => removerMember(item)}>
                    <Image
                            style={{ marginHorizontal: 5, width: 20, height: 20, borderRadius: 10, }}
                            source={minus} />
                    </Touchable>
                </AppView>

            </AppView>

        )
    }
    const removerMember=(ID)=>{
        let removeDetails={
            name:ID
        }
        dispatch(RemoveJoinMember(removeDetails,Token))
    }
   const onRefresh =()=> {
    setState({ ...inbuiltstate,isFetching: true })
    let memberdetails =
                            { generatedCode: GenerateCode }
    dispatch(JoinMemberlist(memberdetails,Token))
      }

    //   const submit=()=>{
         
    // //      let letsgosessiondetails={
    // //         generatedCode: GenerateCode
    // //      } 
    // //   dispatch(Letsgosession(letsgosessiondetails,Token))
    //     }
    return (
        <Container   Withoutimage header={false} >
            <AppView style={style.OTPLayout}>
                <AppText style={[style.normalText, { fontWeight: "bold",fontSize: 25,  }]}>
                    {inbuiltstate.partyName}
     </AppText>
     <AppView style={{flexDirection: 'row',}}>
          <AppText style={[style.normalText, { fontSize: 15, }]}>
                    Party hosted by    
                   
         </AppText>
         <AppText style={[style.normalText, { fontSize: 15, color: light_blue,left:3}]}>
        {inbuiltstate.hostName}
                   
         </AppText>
     </AppView>
                <AppText style={[style.normalText, { fontWeight: "bold",fontSize: 40, marginVertical: 15}]}>
                    {inbuiltstate.generatedCode}
         </AppText>
         <AppView style={style.connectedcount}>
                        <AppText style={[style.normalText, { fontWeight: "bold",fontSize: 22,  }]}>
                            Session in Progress
         </AppText>
                        <AppText style={[style.normalText, { fontSize: 15, color: light_blue}]}>
    {inbuiltstate.joinMemberlist.length} Connected
         </AppText>

                    </AppView>

         <AppView style={{
                    height: height * 0.4,
                    width: width ,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                marginTop: 30
                
                }}>
                    {
                      inbuiltstate.joinMemberlist.length === 0 ?

                            <AppImage  source={emtyicon}/>
                            :
                            <FlatList
                            onRefresh={() =>onRefresh()}
                            refreshing={inbuiltstate.isFetching}
                                showsVerticalScrollIndicator={false}
                                data={inbuiltstate.joinMemberlist}
                                renderItem={(item, index) => connected_list(item, )}
                                keyExtractor={item => item.id}
                            // numColumns={2}
                            />
                    } 
                </AppView> 
                <CustomButton
                // disabled={ inbuiltstate.joinMemberlist.length === 0?true:false}
                        onPress={() => 
                         Actions.Cuemusic({"Page":"sessionfrnd"})}
                            
                        buttonText={Letsgo}
                        textstyle={style.submittextstyle}
                    >
                    </CustomButton>
            </AppView>
        </Container>



    )
}