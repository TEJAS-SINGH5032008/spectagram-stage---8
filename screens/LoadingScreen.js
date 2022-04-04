import React, { Component } from 'react';
import { Text, View ,ActivityIndicator } from 'react-native';
import firebase from "firebase";

export default class LoadingScreen extends Component {
componentDidMount() {
    this.checkIfloggedIn()
}

checkIfLoggedIn = () => {
    firebase.auth().authStateChanged((user) => {
        if (user){
            this.props.navigation.navigate('postScreen')
        } else {
            this.props.navigation.navigate('loginScreen')
        }
    })
}

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <ActivityIndicator size = "large"/>
            </View>
        )
    }
}