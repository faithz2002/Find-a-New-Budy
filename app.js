import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Friend from './src/login/friend.js';
import Profile from './src/login/profile.js';
import Add from './src/login/add.js';









const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Signup: { screen: Signup },
  Friend: { screen: Friend },
   Profile: { screen:Profile },
  Add: { screen: Add},
  
 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

