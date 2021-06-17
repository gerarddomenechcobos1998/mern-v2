import React, { memo, useState } from 'react';
import { View, Text,Alert,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { Navigation } from '../types';
import { theme } from '../core/theme';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {

return (
        <View style={{ flex:1, flexDirection:'column', justifyContent:'center', borderWidth:1, alignContent:'center'}}>
          <View style={{ width:'80%', alignSelf:'center'}}>
            <Button mode='contained' style={{ marginVertical:20, backgroundColor:'red', flexDirection:'column'}} onPress={()=>navigation.navigate('create')}>Create</Button>
            <Button mode='contained' style={{ marginVertical:20, backgroundColor:'green', flexDirection:'column' }} onPress={()=>navigation.navigate('list')}>List</Button>
            <Button mode='contained' style={{ marginVertical:20, backgroundColor:'orange', flexDirection:'column'}} onPress={()=>navigation.navigate('update')}>Update</Button>
            <Button mode='contained' style={{ marginVertical:20, backgroundColor:'blue', flexDirection:'column'}} onPress={()=>navigation.navigate('view')}>View</Button>
          </View>
        </View>
    );
};


const styles = StyleSheet.create({
  entry: {
    backgroundColor: theme.colors.background,

  },
  label: {
    color: theme.colors.text,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
export default memo (HomeScreen);