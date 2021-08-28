import React, { memo, useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Portal, Dialog, Button, FAB } from 'react-native-paper';
import { Navigation } from '../types';
import { theme } from '../core/theme';
import ApiCaller from '../core/ApiCaller';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppStore } from '../context/appStore';

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  const [activites,setActivities] = useState<any>();
  const [deleteId, setDeleteId] = useState<string>();
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const {session} = useAppStore();

  var apiCaller = new ApiCaller(session.userInfo.token);

  const readArticles = async ()=>{
    const dataRes = await apiCaller.call('/activity', 'GET');  
    setActivities(dataRes); 
  }
  const deleteActivity = async ()=>{
    console.log("activity Deleted")
    await apiCaller.call('/activity/'+deleteId+'/delete', 'GET');
  }
  const onDeleteActivity = (id:string)=>{
    setDeleteId(id);
    setDialogVisible(true);
  }

  const confirmDelete = () => {
    deleteActivity();
    setDialogVisible(false); 
  }

  useEffect(()=>{
    readArticles();
  },[dialogVisible])

  return (
    <View style={{ flex:1, flexDirection:'column', justifyContent:'center', alignContent:'center'}}>
      <View style={{ width:'60%', flex:1, flexDirection:'column', justifyContent:'center', alignSelf:'center'}}>
      <ScrollView
        style={{ height:0}}
        contentContainerStyle={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}
      >
        {
          activites?activites.map((activity:any, index:number) =>{
            return(
              <Card key={index} style={{width:300, margin:20}} onPress={()=>navigation.push('view',{id: activity?._id})}>
                <Card.Content>
                  <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column', flex:2}}>
                      <Title>{activity?.name}</Title>
                      <Paragraph>{activity?.properties}</Paragraph>
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'flex-end', flex:1}}>
                      <MaterialCommunityIcons
                        name="pencil"
                        color='#4566f7'
                        size={20}
                        style={{marginBottom:10}}
                        onPress={()=>navigation.push('update',{id: activity?._id})}
                      />
                      <MaterialCommunityIcons
                        name="delete"
                        color='#d12424'
                        size={20}
                        onPress={()=> onDeleteActivity(activity?._id)}
                      />
                    </View>
                  </View>
                </Card.Content>
              </Card>
            );
          }):null
        }
      </ScrollView>
      <View style={{flexDirection:'column', alignSelf:'center', marginVertical:20}}>
        <FAB
          style={{}}
          small
          icon="plus"
          onPress={() => navigation.navigate('create')}
        />
         <FAB
          style={{backgroundColor:'red'}}
          small
          icon="plus"
        />
      </View>
      </View>
      {/*Delete dialog*/}
      <Portal>
        <Dialog style={{width:400, alignSelf:'center'}} visible={dialogVisible} onDismiss={()=> setDialogVisible(false)}>
          <Dialog.Title style={{textAlign:'center'}}>Desea eliminar la actividad?</Dialog.Title>
          <Dialog.Actions style={{alignSelf:'center'}}>
            <Button mode='outlined' uppercase={false} onPress={()=> setDialogVisible(false)}>Cancelar</Button>
            <Button labelStyle={{color:'white'}} style={{backgroundColor:'#d12424', marginLeft:20}} uppercase={false}onPress={confirmDelete}>Eliminar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> 
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