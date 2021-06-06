import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiCaller from './api/ApiCaller';

export default function App() {
  // llamada a la api
  var apiCaller = new ApiCaller();
  let tmp:any = "No encontrado"; 
  useEffect(()=>{
    tmp = apiCaller.call('/activities', 'GET');
  },[])
  
  // fin llamada a la api
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{tmp}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
