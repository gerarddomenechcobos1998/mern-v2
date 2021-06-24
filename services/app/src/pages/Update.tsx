import React, { memo, useState } from 'react';
import { View, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Navigation } from '../types';
import { theme } from '../core/theme';
import ApiCaller from '../core/ApiCaller';
import { useEffect } from 'react';

type Props = {
  navigation: Navigation;
  route: any;
};

const UpdateScreen = ({ navigation, route }: Props) => {
  const [name, setName] = useState<string>('');
  const [properties, setProperties] = useState<string>('');
  const [activityId, setActivityId] = useState<any>();
  var apiCaller = new ApiCaller();

  const readActivity = async ()=>{
    const dataRes = await apiCaller.call('/activity/'+ route.params?.id, 'GET');
    setName(dataRes.name);
    setProperties(dataRes.properties);
    setActivityId(dataRes._id);
  }

  const updateActivity = async (activity:any) => {
    const activityRes = await apiCaller.call('/activity/'+activityId, 'POST', activity);
    navigation.navigate('view', {id: activityId})
  }
  const onUpdatePress = () => {
    let activityTmp = {};
    activityTmp.name = name;
    activityTmp.properties = properties;
    updateActivity(activityTmp);
    setName('');
    setProperties('');
  }

  useEffect(()=>{
    readActivity();
  },[])
  return (
    <View style={{ flex:1}}>
      <View style={{alignSelf:'center', width:'40%', marginTop:50}}>
        <TextInput
            mode= 'outlined'
            label='Nombre'
            placeholder='Nombre de la actividad'
            value={name}
            onChangeText={text=> setName(text)}
            style={{marginBottom:20}}
        />
          <TextInput
            mode= 'outlined'
            label='Propiedades'
            placeholder='Propiedades de la actividad'
            value={properties}
            onChangeText={text=> setProperties(text)}
            style={{marginBottom:60}}
        />
        <Button mode='contained' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=> onUpdatePress()}>Editar</Button>
      </View>
    </View>
  );
};
export default memo(UpdateScreen);