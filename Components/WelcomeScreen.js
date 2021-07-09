import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';


const WelcomeScreen  = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
      <View style={styles.container}>
          
          <Text style={styles.header}>Welcome {route.params.name}!</Text>  
          
      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
      //  padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9880E7',
      },
      header: {
        marginTop:200,
        fontSize: 30,
        fontWeight: "bold"
      }
     
});

export default WelcomeScreen;