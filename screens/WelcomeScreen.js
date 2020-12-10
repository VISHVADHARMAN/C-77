import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{

    userSignUp = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
          return Alert.alert("User Added Successfully")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        });
      }

      userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
    
    render(){
        return(
          <View style={styles.container}>
            <View>
                <Text style={styles.title}>Book Santa</Text>
            </View>
            <View>
                <TextInput style={styles.loginBox}
                placeholder="abc@example.com"
                keyboardType='email-address'
                onChangeText={(text)=>{
                   this.setState({
                       emailId: text
                   })
                }}/>

                <TextInput style={styles.loginBox}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                   this.setState({
                       password: text
                   })
                }}/>
                <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
                onPress={()=>{this.userLogin(this.state.emailId, this.state.password)}}>
                      <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}>
                      <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
          </View>
        );
    }
}