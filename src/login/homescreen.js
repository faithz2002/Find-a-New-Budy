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



class Homescreen extends React.Component {
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
 
  render() {
    
    return (


      <View style={styles.container}>
   
          <View style={styles.textContainer}>
 <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Signup')}
            >
          <Image source ={{uri: 'https://codehs.com/uploads/e33af79267e1963b3acd2c0f642f3494'}}
 style={{ height: 160, width: 160, justifyContent: 'center', }}
/>
          
            </TouchableHighlight> 
            
            </View>


            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 8,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
        backgroundColor: 'purple',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Homescreen;
