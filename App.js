import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,TextInput,TouchableOpacity,Image } from 'react-native';
import {Header} from "react-native-elements"
import {SafeAreaProvider} from "react-native-safe-area-context";
import db from './localDb';

console.log(db["the"].chunks)
export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
      chunks:[]
    }
  }
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
      <Header backgroundColor = {"cyan"}
      centerComponent = {{text:"Monkey Chunky",style:{color:"white",fontSize:20}}}/>  
      <Image style = {styles.imageIcon} 
      source = {{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',}}/>
      <TextInput style={styles.inputbox} onChangeText={(text)=>{
        this.setState({
          text:text
        })}}value={this.state.text}/>
        <TouchableOpacity 
        style = {styles.gobutton}
        onPress = {()=>{
          this.setState({
           chunks:db[this.state.text].chunks
          })
        }}>
          <Text style = {styles.gobuttontext}>
            GO
          </Text>
        </TouchableOpacity >
        
          {this.state.chunks.map(item=>{
            return (
            <TouchableOpacity style={styles.chunkButton}>
            <Text style={styles.displayText}> {item} </Text>
            </TouchableOpacity>)
          })}
       
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputbox:{
    marginTop:50,
    width:"80%",
    alignSelf:"center",
    textAlign:"center",
    height:40,
    borderWidth:5
  },
  gobutton:{
    width:"50%",
    height:"50%",
    alignSelf:"center",
    marginTop:20
  },
 gobuttontext:{
   textAlign:"center",
   fontSize:30,
  
 },
displayText:{
  textAlign:"center",
  fontSize:30
},
imageIcon:{
width:150,
height:150,
marginLeft:150,

},
chunkButton:{
  width:"60%",
  height:50,
  justifyContent:'center',
  alignSelf:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:"red",
  marginTop:1,
}
});
