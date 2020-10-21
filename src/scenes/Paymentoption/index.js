
import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { cardlist } from "../../components/commomList"
import { CustomButton } from '../../components/molecules';

export default Paymentoption = (props) => {
    const state = useSelector(state => state).reducer;
    const {
        Payment_option,
        My_Cards,
        Add_New_Card

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

    const Carddetails_list = ({ item }) => {
        return (
            <AppView style={{ marginVertical: 10, }}>
                <AppImage style={{ height: height * 0.25, width: width * 0.9 }} source={item.card_image} />
            </AppView>

        )
    }
    return (
        <Container 
        
        backnavigate={()=>props.page=="add"?Actions.Musicscreen():Actions.pop()}
        Paymentoptionback  Withoutimage header title={Payment_option}>
            <AppView>
                
            </AppView>
            <AppView style={{ height: height * 0.1, width: width * 0.9, alignSelf: 'center', top: 20 }}>

                <AppText style={[style.normalText, {

                }]}>
                    {My_Cards}
                </AppText>


            </AppView>

            <AppView style={{
                height: height * 0.6,
                width: width * 0.9,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {
                    cardlist.length === 0 ?

                        <AppText style={[style.normalText]}>
                            No records found!
                            </AppText>

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            data={cardlist}
                            renderItem={(item, index) => Carddetails_list(item, index)}


                        />

                }
            </AppView>
            <AppView style={{marginTop: 30}}>
                <CustomButton
                onPress={()=>Actions.Addnewcard()}
                buttonText={Add_New_Card}
                textstyle={[style.normalText, {
color:WHITE,
fontWeight: "bold",
                }]}
                />
            </AppView>



        </Container>



    )

}