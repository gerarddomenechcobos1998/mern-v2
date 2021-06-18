import React, { memo, useState, useEffect } from 'react';
import { View, Text,Alert,StyleSheet, ScrollView} from 'react-native';
import { Card, Title, Paragraph  } from 'react-native-paper';
import { Navigation } from '../types';
import { theme } from '../core/theme';
import ApiCaller from '../core/ApiCaller';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  const [activites,setActivities] = useState<any>();
  var apiCaller = new ApiCaller();

  const readArticles = async ()=>{
    const dataRes = await apiCaller.call('/activities', 'GET');
    setActivities(dataRes); 
  }
  useEffect(()=>{
    readArticles();
  },[])

return (
        <View style={{ flex:1, flexDirection:'column', justifyContent:'center', alignContent:'center'}}>
          <View style={{ width:'60%', flex:1, flexDirection:'column', justifyContent:'center', alignSelf:'center', borderWidth:1}}>
          <ScrollView
            style={{ height:0}}
            contentContainerStyle={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}
          >
            {
              activites?activites.map((activity:any, index:number) =>{
                return(
                  <Card key={index} style={{width:300, margin:20}} onPress={()=>navigation.navigate('view', {id: activity?._id})}>
                    <Card.Content>
                      <Title>{activity?.name}</Title>
                      <Paragraph>{activity?.properties}</Paragraph>
                    </Card.Content>
                  </Card>
                );
              }):null
            }
          </ScrollView>
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