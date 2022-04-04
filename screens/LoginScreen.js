import React, { Component } from 'react';
import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Logout from './LogoutScreen';

export default class LoginScreen extends Component {
signInWithGoogleAsync = async() => {
    try{
        const result = await google.logInAync({
            behaviour:"web",
            androidClientId:"512716633783-rkrc8tpbrknrpnt0akjbqqo0v4ukafkc.apps.googleusercontent.com",
            iosClientId:"512716633783-n6qco4smqeh9g64ffslebfrsepq0nvlf.apps.googleusercontent.com",
            scopes:['profile','email'],
        });
    };
};

    render() {
        return (
            <View style = {Styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <View style = {styles.appTitle}>
                    <Image
                    source = {require(""../assets/logo.png")}
                    style = {styles.appIcon}></Image>
                    <Text style = {styles.appTitleText}>{'Story Telling\nApp'}</Text>
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity
                        style = {styles.button}
                        onPress ={() => this.signInWithGoogleAsync()}>
                            <image 
                            source ={require("../assets/googleIcon.png")}
                            style = {styles.googleIcon}>
                            </image>
                            <Text style = {styles.googleText}> Sign In With Google</Text>
                        </TouchableOpacity>
                        </View>
                        <View style = {styles.cloudContainer}>
                            <Image
                            source = {require("../asssets/cloud.png")}
                            style = {styles.cloudImage}>

                            </Image>
                            </View>
                            

               
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Button
                title = " Sign In With Google"
                onPress = {() => this.signInWithGoogleAsync()}></Button>
            </View>
            </View>
            </View>
        )
    }
}