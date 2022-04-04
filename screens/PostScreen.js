import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import PostCard from './PostCard';

export default class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
};
};
componentDidMount() 

fetchUser = () =>{
letTheme;
firebase 
.database()
.ref("/user/" + firebase.auth().currentUser.uid)
.on("/value/",(snapshot) =>{
    theme = snapshot.val().current_theme
    this.setState({light_theme : theme === "light"})
});
}

renderItem = ({ item : post }) => {
    return <PostCard post = {post} navigation = {this.props.navigation}/>
};
const styles  = StyleSheet.create({
    container:{
        flex : 1
    },

    postCardLight:{
        margin : RFValue(20),
        backgroundColor : '#eaeaea',
        barderRadius : RFValue(20)
    },

    authorNameText:{
        color : "white",
        fontSize : RFValue(20)
    },

    authorNameTextLight:{
        color : "black",
        fontSize : RFValue(20)
    }
});

