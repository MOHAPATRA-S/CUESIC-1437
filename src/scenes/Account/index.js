
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Clipboard } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { contactemail ,contactphone} from '../../assets';
import { Drop_Down_Modal_forall } from '../../components/molecules';

export default Account = (props) => {
    const state = useSelector(state => state).reducer;
    const {
        Payment_option,
        Account,
        Change_Password,
        Delete_Account,
        Deleteaccount_status
       
    } = state.language
    let [deletemodal, setdeletemodal] = useState(false);
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
        <Container 
        backnavigate={()=>Actions.Setting()}
        Acountback scrollable Withoutimage header title={Account}> 
               <AppView style={{height:height*0.08,width:width*0.83,alignSelf: 'center',top:10}}>
                    <Touchable onPress={()=>Actions.Paymentoption()}>
                        <AppText style={[style.normalText, {
                  
                }]}>
                            {Payment_option}
                        </AppText>
                    </Touchable>
            </AppView>
            <AppView style={{height:height*0.08,width:width*0.83,alignSelf: 'center',top:10}}>
                    <Touchable onPress={()=>Actions.Changepassword()}>
                        <AppText style={[style.normalText, {
                    
                }]}>
                            {Change_Password}
                        </AppText>
                    </Touchable>
            </AppView>
            <AppView style={{height:height*0.08,width:width*0.83,alignSelf: 'center',top:10}}>
                    <Touchable onPress={()=>setdeletemodal(true)}>
                        <AppText style={[style.normalText, {
                   
                }]}>
                            {Delete_Account}
                        </AppText>
                    </Touchable>
            </AppView>
            <Drop_Down_Modal_forall
                visible={deletemodal}
                headertest={Delete_Account}
                textbyown={Deleteaccount_status}
                textno="No"
                textyes="Yes"
                onPressClose={()=>setdeletemodal(false)}
                onPressno={()=>setdeletemodal(false)}
                onPressyes={()=>{setdeletemodal(false);Actions.Login()}}
                />
        </Container>



    )

}