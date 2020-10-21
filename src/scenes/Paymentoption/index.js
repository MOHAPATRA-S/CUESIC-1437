import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, ImageBackground,Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { CustomButton, Input } from '../../components/molecules';
import { GetPayment, clearAction, Paymentprocess } from '../../Action/Action';
import AsyncStorage from '@react-native-community/async-storage';
import { cardimage, blackcross, emtyicon } from '../../assets';
let Token
export default Paymentoption = (props) => {
  const state = useSelector(state => state).reducer;
  const dispatch = useDispatch()
  const {
    Payment_option,
    My_Cards,
    Add_New_Card,
    CVV
  } = state.language
  let [inbuiltstate, setState] =
    useState({
      cardlist: "",
      savemodal: false,
      emailStatus: false,
      emailError: "",
      email: "",
      cardId: "",
      subscriptionId: ""

    });
  useEffect(() => {
    AsyncStorage.getItem("userToken").then(resp => {
      if (JSON.parse(resp) != null) {

        Token = JSON.parse(resp)
        dispatch(GetPayment(Token))
      }
    })
   if( props.page == "add" ){
    AsyncStorage.setItem("Subscription_ID", JSON.stringify(props.subscriptionforpayment._id))
   }
   
    

  }, [])

  useEffect(() => {

    switch (state.case) {
      case "GETPAYMENTLIST_SUCCESS":

        setState({
          ...inbuiltstate,
          cardlist: state.cardDetails,

        })

        dispatch(clearAction())

        break;
      case "GETPAYMENTLIST_FAILURE":

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
        case "PAYMENTPROCESS_SUCCESS":

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
          case "PAYMENTPROCESS_FAILURE":

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
  const handlevalidate = (text) => {
    if (text === '') {
      setState({
        ...inbuiltstate,
        emailStatus: false,
        emailError: "Please enter name.",
        email: ""
      })
    }
    else {
      setState({
        ...inbuiltstate,
        emailStatus: true,
        emailError: "",
        email: text
      })
    }
  }
  const openCvvfield = (ID) => {
    setState({ ...inbuiltstate, savemodal: true, cardId: ID._id })
  }
  const submit = () => {
    let SubscriptionID
    if (inbuiltstate.emailStatus) {
      setState({ ...inbuiltstate, savemodal: false })
      AsyncStorage.getItem("Subscription_ID").then(resp => {
        if (JSON.parse(resp) !== null) {
          SubscriptionID = JSON.parse(resp)
          let paymentDetails = {
            subscriptionId: SubscriptionID,
            cardId: inbuiltstate.cardId,
            cvv: inbuiltstate.email
           
          }
         
    dispatch(Paymentprocess(paymentDetails,Token))
        }
      })
    
    }
    else { setState({ ...inbuiltstate, emailstatus: false, emailError: "Please enter cvv.", }) }
  }
  const Carddetails_list = ({ item }) => {
    return (
      <Touchable onPress={() => openCvvfield(item)} style={{ marginVertical: 10, }}>
        <ImageBackground style={{
          justifyContent: 'center', height: height * 0.25, width: width * 0.9

        }} source={cardimage} >

          <AppText style={{ marginTop: 95, left: 30, fontSize: 20 }}>
            {item.cardNumber}
          </AppText>
          <AppText style={{ left: 190, marginTop: 14, fontSize: 20 }}>
            {item.expMonthYear}
          </AppText>
          <AppText style={{ left: 30, fontSize: 20 }}>
            {item.cardName}
          </AppText>
        </ImageBackground>
      </Touchable >

    )
  }
  return (
    <Container

      backnavigate={() => props.page == "add"||props.page == "addback" ? Actions.Musicscreen() : props.page == "onlyback" ? Actions.Account() : Actions.pop()}
      Paymentoptionback Withoutimage header title={Payment_option}>
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
          inbuiltstate.cardlist.length === 0 ?

            <AppImage source={emtyicon} />

            :
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={inbuiltstate.cardlist}
              renderItem={(item, index) => Carddetails_list(item, )}
            />

        }
      </AppView>
      <AppView style={{ marginTop: 30 }}>
        <CustomButton
          onPress={() => Actions.Addnewcard({"page":props.page=="add"?"add":"onlyback"})}
          buttonText={Add_New_Card}
          textstyle={[style.normalText, {
            color: WHITE,
            fontWeight: "bold",
          }]}
        />
      </AppView>

      <AppModal
        animationType='fade'
        visible={inbuiltstate.savemodal}>
        <AppView style={style.mainContainer} >
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
              </AppText>
              <Touchable onPress={() => setState({ ...inbuiltstate, savemodal: false })}>
                <AppImage style={{ width: 18, height: 18 }} source={blackcross} />
              </Touchable>
            </AppView>
            <Input
              placeholder={CVV}
              secure
              maxLength={3}
              Inputcontainer={style.PlayerInputcontainer}
              Errorstyle={{ width: width * 0.65, }}
              onChangeText={(text) => handlevalidate(text, )}
              style={{
                borderRadius: 0,
                width: width * 0.65,
                borderColor: GRAY,
                height: inbuiltstate.emailError ? hp("5%") : hp("6%"),
              }}
              errortext={inbuiltstate.emailError}
            />
            <CustomButton
              onPress={() => submit()}
              style={{ width: width * 0.75 }}
              buttonText="Next"
              textstyle={[style.normalText, { fontSize: 20, color: WHITE }]}
            />
          </AppView>
        </AppView>
      </AppModal>

    </Container>



  )
}