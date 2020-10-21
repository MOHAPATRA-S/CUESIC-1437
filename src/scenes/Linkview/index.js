
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "../../components/containers"
import { AppText, AppView, AppbackgraoundImage, AppImage, Touchable, AppModal, TouchableIn } from '../../components/atoms';
import { WHITE, DarkGrey, GRAY, BLACK } from '../../styles/colors';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { WebView } from "react-native-webview"

export default LinkView = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()

    let [deletemodal, setdeletemodal] = useState(false);

    useEffect(() => {

    }, [])

    return (
        <Container
            backnavigate={() => Actions.pop()}
            Withoutimage header title={"Link App"}>
            <WebView
                source={{ uri: "https://accounts.spotify.com/authorize?client_id=70fd0f12c8d04a33a235a498c22a5e3a&response_type=code&redirect_uri=http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1627/success" }}
            >

            </WebView>
        </Container>



    )

}