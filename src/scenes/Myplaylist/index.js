import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, ImageBackground } from 'react-native';
import { useSelector } from "react-redux"
import { Container } from "../../components/containers"
import style from "./style"
import { AppText, AppView, Touchable } from '../../components/atoms';
import { Input, CustomButton } from '../../components/molecules';
const { height, width } = Dimensions.get('window');
import { Myplay_list } from "../../components/commomList"
import { Actions } from 'react-native-router-flux';
import { WHITE } from '../../styles/colors';
import { emtyicon } from '../../assets';
export default Myplaylist = (props) => {

    const state = useSelector(state => state).reducer;

    const { My_Playlist
    } = state.language
    // let [Timer, setTimer] = useState(58)
    const [inbuiltstate, setState] =
        useState({

        });



    useEffect(() => {

    }, [])

    const Play_list = ({ item,  }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (

            <AppView>
                <Touchable 
                 onPress={props.page=="addasplaylist"?Actions.Playlistname()
                 :props.navigatePlaylisname
                    // {"page":"myplalist","paylist":item}
                }>
                    <ImageBackground resizeMode="contain"
                        style={{
                            height: height * 0.15,
                            width: width * 0.4,
                            alignSelf: 'center',
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: 10
                        }}
                        source={item.myplay_image} >
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
    return (
      
        <Container
            backnavigate={props.page=="addasplaylist"?Actions.Mylibrary():props.backnavigateplaylist}
            Withoutimage header={true} title={My_Playlist}>
            <AppView  style={style.OTPLayout}>

                {
                    Myplay_list.length === 0 ?

                  
                            <AppImage  source={emtyicon}/>
                         

                        :
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            data={Myplay_list}
                            renderItem={(item, index) => Play_list(item, )}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        />

                }

            </AppView>
        </Container>
    )
}


