import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ApiCaller from './api/ApiCaller';

export default function App() {
  // llamada a la api
  var apiCaller = new ApiCaller();
  const [data,setData] = React.useState([]);
  let tmp = undefined;
  // get info about 1 activity
  const buttonPress = async ()=>{
    tmp = await apiCaller.call('/activities/60b7f7740594d00f557a5140', 'GET');
    console.log('Response', tmp);
    setData(JSON.stringify(tmp))
  }
  
  // fin llamada a la api
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={buttonPress}>Obtain data</Button>
      <Text>{data}</Text>
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
