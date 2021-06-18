import React, { memo, useEffect, useState } from 'react';
import { View, Text,Alert,StyleSheet} from 'react-native';
import ApiCaller from '../core/ApiCaller';
import { Navigation } from '../types';
import { theme } from '../core/theme';

type Props = {
  navigation: Navigation;
  route: any;
};

const ViewScreen = ({ navigation, route }: Props) => {
  const [article, setArticle] = useState();
  var apiCaller = new ApiCaller();

  const readArticle = async ()=>{
    const dataRes = await apiCaller.call('/activities/'+ route.params?.id, 'GET');
    setArticle(dataRes); 
  }

  useEffect (()=>{
    readArticle();
  },[]);
  return (
          <View style={{ flex:1}}>
            <Text>{article?._id}</Text>
            <Text>{article?.name}</Text>
            <Text>{article?.properties}</Text>
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
export default memo (ViewScreen);