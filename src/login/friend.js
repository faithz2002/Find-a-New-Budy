import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,
Image,
 TouchableHighlight,
 ScrollView,
 Alert
            

} from 'react-native';


import Swiper from 'react-native-swiper';


export default class App extends Component {
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
render(){

return (

<Swiper style={styles.wrapper} showsButtons={true}>

<View style={styles.slide1}>
<Text style={styles.text1}>
Jayda
</Text>
<ScrollView>
<View style={styles.card}>
<Image source ={{uri: 'https://codehs.com/uploads/b58cce931a76ec4b09df8624126d7809'}}
 style={{ height: 300, width: 200, justifyContent: 'center', margin: 20, alignContent: 'center' }}
/>
<Text style={styles.text}>Puerto Rican,
Capricorn,{"\n"}
18,
Nice,{"\n"}
Loves to have fun
</Text>
</View>


<View style={styles.textContainer}>
            <TouchableHighlight
                    onPress={() => {
alert (' Slide over to see more friends: ')}}>                     
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Dont Be My Friend
                        </Text>
                    </View>
                </TouchableHighlight>
                   <TouchableHighlight
             onPress={() => {
alert (' you added Jayda as a friend: ')}}>
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Be My Friend 
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Profile')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Go to My profile
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            </ScrollView>
</View>

<View style={styles.slide2}>
<Text style={styles.text1}>
Andre
</Text>
<ScrollView>
<View style={styles.card}>
<Image source ={{uri: 'https://codehs.com/uploads/693a8d7b891d57b18ceaed6222a31886'}}
 style={{ height: 300, width: 200, justifyContent: 'center', margin: 20, alignContent: 'center' }}
/>
<Text style={styles.text}> Pretty Boy,Black,
Loves to dress,{"\n"}
18 ,
Libra,{"\n"}
Goofball
</Text>
</View>
<View style={styles.textContainer}>
            <TouchableHighlight
             onPress={() => {
alert (' Slide over to see more friends: ')}}> 
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Dont Be My Friend
                        </Text>
                    </View>
                </TouchableHighlight>
                   <TouchableHighlight
              onPress={() => {
alert (' you added Andre as a friend: ')}}>
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Be My Friend 
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            </ScrollView>
</View>
<View style={styles.slide3}>
<Text style={styles.text1}>
Alshaquan
</Text>
<ScrollView>
<View style={styles.card}>
<Image source ={{uri: 'https://codehs.com/uploads/b2250446675cabc8c5b67106204354bb'}}
 style={{ height: 300, width: 200, justifyContent: 'center', margin: 20, alignContent: 'center' }}
/>
<Text style={styles.text}>


19,
Capricorn,
Funny,{"\n"}
Overprotective,
Football Player
</Text>
</View>
<View style={styles.textContainer}>
            <TouchableHighlight
               onPress={() => {
alert (' Slide over to see more friends: ')}}> 
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Dont Be My Friend
                        </Text>
                    </View>
                </TouchableHighlight>
                   <TouchableHighlight
              onPress={() => {
alert (' you added Al as a friend: ')}}>
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Be My Friend 
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            </ScrollView>
</View>
<View style={styles.slide4}>
<Text style={styles.text1}>
Munir
</Text>
<ScrollView>
<View style={styles.card}>

<Image source ={{uri: 'https://codehs.com/uploads/7671f60f0dc6dd10b45c678ed8ed7c4f'}}
 style={{ height: 300, width: 200, justifyContent: 'center', margin: 20, alignContent: 'center' }}
/>
<Text style={styles.text}>
18,
Capricorn,
Typical Hood Lover Boy,{"\n"}
Sweetheart
Great Listener</Text>

</View>
<View style={styles.textContainer}>
            <TouchableHighlight
               onPress={() => {
alert (' Slide over to see more friends: ')}}> 
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Dont Be My Friend
                        </Text>
                    </View>
                </TouchableHighlight>
                   <TouchableHighlight
             onPress={() => {
alert (' you added Munir as a friend: ')}}>
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Be My Friend 
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            </ScrollView>
</View>

<View style={styles.slide5}>


 <Text style={styles.text1}>
Mecca
</Text>
<ScrollView>
<View style={styles.card}>

<Image source ={{uri: 'https://codehs.com/uploads/6ed9155aa5d64bdb9c82a57d935b8fd1'}}
 style={{ height: 300, width: 200, justifyContent: 'center', margin: 20, alignContent: 'center' }}
 />



<Text style={styles.text}>DramaQueen
,19,
Capricorn,{"\n"}
Funny,
Loves to talk</Text>
 

</View>
<View style={styles.textContainer}>
            <TouchableHighlight
               onPress={() => {
alert (' Slide over to see more friends: ')}}> 
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Dont Be My Friend
                        </Text>
                    </View>
                </TouchableHighlight>
                   <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Friend')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Be My Friend 
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            </ScrollView>
</View>
 

</Swiper>

);

}

}


const styles = StyleSheet.create({
card: {
height: 418,
margin: 15,
borderRadius: 5,
backgroundColor: 'white',
shadowOffset: {
width: 0,
height: 2,
},
shadowRadius: 6,
shadowOpacity: 0.3,
elevation: 2,
},
text1: {
  
justifyContent: 'center',

alignItems: 'center',

color: 'white',

fontSize: 25,

fontWeight: 'bold',

},
wrapper: {

},

slide1: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: 'red',

},

slide2: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: 'black',

},

slide3: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: 'blue',

},
slide4: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: 'blue',
},
slide5: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: 'blue',
},

text: {
  
justifyContent: 'center',

alignItems: 'center',

color: 'black',

fontSize: 12,

fontWeight: 'bold',

backgroundColor: 'white',


height: 40,


width: 200,




marginTop: 10,


marginBottom: 50,


borderRadius: 10

},

touchableButton1: {


backgroundColor: '#13CE66',


height: 40,


width: 200,


alignItems: 'center',


justifyContent: 'center',


marginTop: 10,


marginBottom: 50,


borderRadius: 10

},

buttonText: {

color: '#fff',

fontSize: 20,

fontWeight:'bold',




},
});
