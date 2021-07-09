
import React from "react";
import {Component} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import WelcomeScreen from './WelcomeScreen';

const userInfo = {userName: 'xyz', password:'xyz@123'}

export default class Login extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        password: ""
      };
      
    }
    handleName = text => {
      this.setState({ userName: text });
    };
    handlePassword = text => {
      this.setState({ password: text });
    };
  
    _login = async() => {
        await AsyncStorage.setItem('token', userInfo.userName);
      if(userInfo.userName == this.state.userName && userInfo.password == this.state.password) {
        await AsyncStorage.setItem('IsLoggedIn', '1');
        alert('logged In');
        this.props.navigation.navigate('WelcomeScreen', { name: userInfo.userName });
      }
      else {
        alert('UserName or Password is Incorrect');
      }
      
    }
  
    tokengetItem = async() => {

        const value = await AsyncStorage.getItem('token');
        if(value !== null)
        {
           this.props.navigation.navigate(Login);
        }
        else{

        }

    }
    
 
render()
{
  this.tokengetItem();
  return(
    <SafeAreaView style={styles.container}>
        
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="UserName..."
            placeholderTextColor="#E0D3EE"
            onChangeText={this.handleName} 
            value={this.state.userName}
            autoCapitalize="none"/>
         </View>

        <View style={styles.inputView} > 
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            secureTextEntry
            placeholderTextColor="#E0D3EE"
            onChangeText={this.handlePassword} 
            value={this.state.password}
            autoCapitalize="none"/>
        </View>

        <View>
          <TouchableOpacity style={styles.loginBtn}
          onPress={() => this._login()}>
            <Text style={styles.loginText}>Sign In</Text>
            
          </TouchableOpacity>
        </View>
    
        <View>
          <TouchableOpacity  style={styles.forgot}>
            <Text> Forgot Password?</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>   
  ); 
 }
}
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0F0F1',
      alignContent: 'center',
    },
    inputView: {
      width: '100%',
      backgroundColor: "#436379",
      borderRadius: 10,
      height: 40,
      marginTop: 8,
      marginBottom: 8,
      justifyContent: "center",
      padding: 16,
      borderWidth: 1,
      color: '#FFFFFF',
      borderColor: 'black',
    },
    inputText: {
      height: 50,
      color: "white",
      fontSize: 16,
    },
    forgot: {
      color: "black",
      fontSize: 16,
      marginTop: 24,
      marginBottom: 16
    },
    
    loginBtn: {
      width: 100,
      backgroundColor: "#4738CB",
      borderRadius: 32,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 16,
      borderWidth: 0.5,
      color: '#FFFFFF',
      borderColor: 'black',
    },
  
    loginText: {
      color: 'white',
      height: 50,
      padding:16,
      fontSize: 16,
    }
     
  
  });
  
 