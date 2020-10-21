import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Image,Dimensions,StyleSheet } from 'react-native';
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable, } from '../../components/atoms';
import { Input, CustomButton } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import {confirminvitationlist}from "../../components/commomList"
import { Actions } from 'react-native-router-flux';
import {minus} from "../../assets/index"
import { light_blue } from '../../styles/colors';


export default Sessionfriendjoin = (props) => {
    const phoneOTP1 = useRef(null);
   
    const state = useSelector(state => state).reducer;

    const { Letsgo
    } = state.language
 
    const [inbuiltstate, setState] =
        useState({
          


        });
  
    let [Modalvisible, setModalvisible] = useState(false)



   

    useEffect(() => {
     
    }, [])


    const connected_list = ({ item, index }) => {
        return (

            <AppView>
                <AppView style={style.unselectedLayout}>
                    
                         <AppText style={[style.normalText, { fontWeight: "normal", left: 10 }]}>
                                {item.title}
                            </AppText>

                   

                    <Touchable onPress={() => { setState({...inbuiltstate,successmodal:true,}) }}>
                    <Image
                            style={{ marginHorizontal: 5, width: 20, height: 20, borderRadius: 10, }}
                            source={minus} />
                    </Touchable>
                </AppView>

            </AppView>

        )
    }




    return (


  
        <Container  scrollable Withoutimage header={false} >
            <AppView style={style.OTPLayout}>
                <AppText style={[style.normalText, { fontWeight: "bold",fontSize: 25,  }]}>
                    Afro Vibes
     </AppText>
     <AppView style={{flexDirection: 'row',}}>
          <AppText style={[style.normalText, { fontSize: 15, }]}>
                    Party hosted by    
                   
         </AppText>
         <AppText style={[style.normalText, { fontSize: 15, color: light_blue,left:3}]}>
          John Doe
                   
         </AppText>
     </AppView>
               
        
                <AppText style={[style.normalText, { fontWeight: "bold",fontSize: 40, marginVertical: 15}]}>
                     6 7 6 8
         </AppText>
         <AppView style={style.connectedcount}>
                        <AppText style={[style.normalText, { fontWeight: "bold",fontSize: 22,  }]}>
                            Session in Progress
         </AppText>
                        <AppText style={[style.normalText, { fontSize: 15, color: light_blue}]}>
                            4 Connected
         </AppText>

                    </AppView>

         <AppView style={{
                    height: height * 0.4,
                    width: width ,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                marginVertical: 30
                   
                }}>
               
                    {
                        confirminvitationlist.length === 0 ?

                            <AppText style={[style.normalText]}>
                                No records found!
                            </AppText>

                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={confirminvitationlist}
                                renderItem={(item, index) => connected_list(item, index)}
                                keyExtractor={item => item.id}
                            // numColumns={2}
                            />

                    } 
                </AppView> 
                <CustomButton
                        onPress={() => Actions.Cuemusic({"Page":"sessionfrnd"})}
                        buttonText={Letsgo}
                        textstyle={style.submittextstyle}
                    >
                    </CustomButton>
            </AppView>
        </Container>



    )
}