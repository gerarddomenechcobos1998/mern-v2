import React, { memo, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ApiCaller from '../core/ApiCaller';
import { Navigation } from '../types';
import { Title, Paragraph } from 'react-native-paper';

type Props = {
  navigation: Navigation;
  route: any;
};

const ViewScreen = ({ navigation, route }: Props) => {
  const [article, setArticle] = useState();
  var apiCaller = new ApiCaller();

  const readActivity = async ()=>{
    const dataRes = await apiCaller.call('/activity/'+ route.params?.id, 'GET');
    setArticle(dataRes); 
  }

  useEffect (()=>{
    readActivity();
  },[]);
  return (
          <View style={{ flex:1}}>
            <View style={{alignSelf:'center', width: '40%', marginTop: 40}}>
              <Title style={{textAlign:'center', fontSize:24, fontWeight:'700', marginBottom:20}}>Info de la actividad</Title>
              <Paragraph style={{ fontSize:20, fontWeight:'400', marginBottom:20}}><Paragraph style={{ fontSize:20, fontWeight:'700'}}>ID: </Paragraph>{article?._id}</Paragraph>
              <Paragraph style={{ fontSize:20, fontWeight:'400', marginBottom:20}}><Paragraph style={{ fontSize:20, fontWeight:'700'}}>Nombre: </Paragraph>{article?.name}</Paragraph>
              <Paragraph style={{ fontSize:20, fontWeight:'400', marginBottom:20}}><Paragraph style={{ fontSize:20, fontWeight:'700'}}>Propiedades: </Paragraph>{article?.properties}</Paragraph>
            </View>
          </View>
      );
  };
export default memo (ViewScreen);