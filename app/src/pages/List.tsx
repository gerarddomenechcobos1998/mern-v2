import React, { memo, useState } from 'react';
import { View, Text,Alert,StyleSheet} from 'react-native';
import ApiCaller from '../core/ApiCaller';
import { Navigation } from '../types';
import { theme } from '../core/theme';
import { useEffect } from 'react';

type Props = {
  navigation: Navigation;
};

const ListScreen = ({ navigation }: Props) => {
  
  const [data,setData] = useState<any>();
  var apiCaller = new ApiCaller();

  const onListButtonPress = async ()=>{
    const dataRes = await apiCaller.call('/activities', 'GET');
    setData(dataRes); 
  }

  useEffect( ()=>{
    onListButtonPress();    
  },[])
return (
  <View style={{ flex:1}}>
      {
            data?.map((element:any, index:number) =>{
            return(
              <View key={index}>
                <Text style={{fontWeight:'700'}}>_id: </Text>
                <Text>{element?._id}</Text>
                <Text style={{fontWeight:'700'}}>_name: </Text>
                <Text>{element?.name}</Text>
                <Text style={{fontWeight:'700'}}>properties: </Text>
                <Text>{element?.properties}</Text>
              </View>
            );
        })
      }
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
export default memo(ListScreen);