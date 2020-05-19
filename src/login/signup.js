     
import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';


class Signup extends React.Component {
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

  render() {
     
    return (
      
        <View style={styles.containerView}>
          <View style={styles.loginFormView}>

 <View style={styles.textContainer}>
  
          <Image source ={{uri: 'https://codehs.com/uploads/e33af79267e1963b3acd2c0f642f3494'}}
 style={{ height: 160, width: 160, justifyContent: 'center', }}
/>
          
           

</View>

             <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

             <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Profile')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            CONTINUE
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>





 <View style={styles.textContainer}>


 <Button
          title="DONT HAVE AN ACCOUNT ? SIGN UP "
          onPress={() => this.props.navigation.navigate('Profile')}
        />
          
          </View>


          </View>
        </View>
      
    );
  }

}



const styles = StyleSheet.create({

containerView: {
  flex: 1,
  background:'purple',
},
loginScreenContainer: {
  flex: 1,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor: 'pink',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});

export default Signup;
