import React from 'react'
import {View,
Text,
Modal,
ActivityIndicator
} from 'react-native'
import { PURPLE, light_blue } from '../styles/colors'
import { useSelector } from 'react-redux';


export const Loader = ({visible, text, onRequestClose }) => {
    const state = useSelector(state => state).reducer;




return (
<Modal
transparent={true}
visible={state.loading}
onRequestClose={onRequestClose}
>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<View style={{ flexDirection: 'row', backgroundColor: '#00000', borderRadius: 5, padding: 10, width: 230, height: 150,
alignItems: 'center', justifyContent: 'center' }}>
<ActivityIndicator size='large' color={light_blue} />
<Text style={{fontSize: 18, marginLeft: 10, fontWeight: "bold" }}>{text}</Text>
</View>
</View>
</Modal>
)
}