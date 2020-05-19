import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'


class Homescreen extends React.Component {
state = {

image: null,

};
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
 
  render() {
    let { image } = this.state;
    return (


      <View style={styles.container}>
       
          <View style={styles.textContainer}>
 
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Button title="Upload an image from camera roll" onPress={this._pickImage} />

{image && <Image source={{ uri: image }} style={{ width: 400, height: 400 }} />}

</View>    
  <TextInput placeholder="type your name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            



<TextInput placeholder="type your race " placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="type your age" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="type a  word to describe you " placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('')}
              
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                             My Friends
                        </Text>
                    </View>
                </TouchableHighlight>
                   <TouchableHighlight
             onPress={() => this.props.navigation.navigate('Friend')}
              
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Find New Friends
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
           

          
            
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
        backgroundColor: 'purple',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        color:'white',
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Homescreen;
