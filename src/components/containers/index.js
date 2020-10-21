import React from 'react';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { AppView, AppbackgraoundImage } from "../atoms"
import styles from "../../styles"
import { Header } from '../molecules'
import { halfbackground } from '../../assets/index';
const Container = (props) => {

    if (props.Withoutimage)
        return (
            <AppView style={styles.defaultContainer}>
                {props.scrollable ?
                    <AppView style={styles.defaultContainer}>
                        {props.header !== false && <Header {...props} />}
                        {props.custom}
                        < KeyboardAwareScrollView
                            enableOnAndroid
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[styles.contentContainerStyle, props.contentContainerStyle]}>
                            {props.children}
                        </KeyboardAwareScrollView>
                    </AppView>
                    :
                    <AppView style={[styles.defaultContainer, props.style]}>
                        {props.header !== false && <Header {...props} />}
                        {props.custom}
                        {props.children}
                    </AppView>
                }
            </AppView >
        )
    else return (
        <AppbackgraoundImage
            resizeMode="contain"
            source={halfbackground}
            style={[styles.BackgroundImageStyle]} >
            {props.scrollable ?
                <AppView
                    style={styles.defaultContainer, props.Containerlayout}>
                    {props.header !== false &&
                        <Header {...props} />}
                    {props.custom}
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[styles.contentContainerStyle, props.contentContainerStyle]}>
                        {props.children}
                    </KeyboardAwareScrollView>
                </AppView>
                :
                <AppView style={[styles.defaultContainer, props.style]}>
                    {props.header !== false && <Header {...props} />}
                    {props.custom}
                    {props.children}
                </AppView>
            }
        </AppbackgraoundImage>
    )
}

export {
    Container
}
