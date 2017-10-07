
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';//needs to be above anything We have created an imported
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component{

  componentWillMount() {  
    //firebase Initialisation 
    firebase.initializeApp({
      apiKey: "AIzaSyBREnfiVDDyO6KH194sbAbLiow1JL5C5YA",
      authDomain: "auth-42480.firebaseapp.com",
      databaseURL: "https://auth-42480.firebaseio.com",
      projectId: "auth-42480",
      storageBucket: "auth-42480.appspot.com",
      messagingSenderId: "495707377751"
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;