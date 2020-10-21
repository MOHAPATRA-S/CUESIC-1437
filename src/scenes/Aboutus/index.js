
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Clipboard } from "react-native"
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { bullet } from '../../assets';
import { StaticComponent } from '../../components/molecules';

export default Aboutus = (props) => {
    const state = useSelector(state => state).reducer;
    const {
        About_us,
       
    } = state.language
    let [logoutmodal, setlogoutmodal] = useState(false);
    let [inbuiltstate, setState] =
        useState({
          termStatus:false,
          privacystatus:false
        });
    useEffect(() => {

        // setState({ ...inbuiltstate, radiostation: Musicstationlist })

    }, [])


    return (
        <Container 
        backnavigate={()=>Actions.pop()}
        scrollable Withoutimage header title={About_us}>      
                <Touchable
                onPress={()=>setState({...inbuiltstate,termStatus:!inbuiltstate.termStatus,privacystatus:false})}
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.85,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            // justifyContent: 'center',
                            // height:40
                        }}
                    >
                           <AppText style={[style.normalText, {
                            fontSize: 20,
                            // marginLeft: 8,
                            fontWeight: 'bold',

                        }]}>
                           1.
                            </AppText>
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            marginLeft: 8,
                            fontWeight: 'bold',
                            color: "rgb( 28, 92, 222)",
                            textDecorationLine: 'underline',

                        }]}>
                            Terms and Conditions
                            </AppText>
                    </Touchable>

                    <Touchable
                     onPress={()=>setState({...inbuiltstate,privacystatus:!inbuiltstate.privacystatus,termStatus:false})}
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.85,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            // justifyContent: 'center',
                            // height:40
                        }}
                    >
                           <AppText style={[style.normalText, {
                            fontSize: 20,
                            // marginLeft: 8,
                            fontWeight: 'bold',

                        }]}>
                           2.
                            </AppText>
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            marginLeft: 8,
                            fontWeight: 'bold',
                            color: "rgb( 28, 92, 222)",
                            textDecorationLine: 'underline',

                        }]}>
                            Privacy Policy
                            </AppText>
                    </Touchable>
            {/* <AppText style={[style.normalText, { fontSize: 17, fontWeight: "normal",width: width * 0.85 ,alignSelf: 'center',}]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et
                        viverra justo commodo. Proin sodales pulvinar tempor.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
                        felis tellus mollis orci, sed rhoncus sapien nunc eget. Lorem ipsum dolor sit amet,
                        
                       
                        </AppText> */}
                      

                        <AppView
                        style={{
                            alignItems: 'flex-start',
                            width: width * 0.85,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            // justifyContent: 'center',
                            // height:40
                        }}
                    >
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            // marginLeft: 8,
                            fontWeight: 'bold',

                        }]}>
                           3.
                            </AppText>
                            
                        <AppText style={[style.normalText, {
                            fontSize: 20,
                            marginLeft: 8,
                            fontWeight: 'bold',

                        }]}>
                          Version: 
                            </AppText>
                              <AppText style={[style.normalText, { fontSize: 17, fontWeight: "normal",width: width * 0.85 ,alignSelf: 'center',left:4}]}>
              v 0.0.3
                        
                       
                        </AppText>
                    </AppView>

{inbuiltstate.termStatus==true||inbuiltstate.privacystatus==true?
                    <StaticComponent 
                    headerstatus={inbuiltstate.termStatus?
                        "Terms and Conditions":"Privacy Policy"
                    }
                    staticcontent={inbuiltstate.termStatus?
"Loremipsumdolorsitamet,consecteturadipiscingelit.Aeneaneuismodbibendumlaoreet.Proingravidadolorsitametlacusaccumsanetviverrajustocommodo.ProinsodalespulvinartempoCumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus.Namfermentum,nullaluctuspharetravulputate,felistellusmollisorci,sedrhoncussapiennunceget.Loremipsumdolorsitamet,consecteturadipiscingelit.Aeneaneuismodbibendumlaoreet.Proingravidadolorsitametlacusaccumsanetviverrajustocommodo.Proinsodalespulvinartempor.Cumsociisnatoquepenatibusetmagnisdisparturientmontes"
                    :"consecteturadipiscingelit.Aeneaneuismodbibendumlaoreet.Proingravidadolorsitametlacusaccumsanetviverrajustocommodo.ProinsodalespulvinartempoCumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus.Namfermentum,nullaluctuspharetravulputate,felistellusmollisorci,sedrhoncussapiennunceget.Loremipsumdolorsitamet,consecteturadipiscingelit.Aeneaneuismodbibendumlaoreet.Proingravidadolorsitametlacusaccumsanetviverrajustocommodo.Proinsodalespulvinartempor.Cumsociisnatoquepenatibusetmagnisdisparturientmontes"}
                    />
                    :
                   null
}
        </Container>



    )

}