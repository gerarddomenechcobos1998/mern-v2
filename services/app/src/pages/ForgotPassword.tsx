import React, { memo, useState } from 'react';
import { View, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ApiCaller from '../core/ApiCaller';
import { CommonActions } from '@react-navigation/native';

type Props = {
  navigation: any;
};

const ForgotPasswordScreen = ({ navigation }: Props) => {
    
    const [ email, setEmail ] = useState<string>('');

    var apiCaller = new ApiCaller();

    const resetStackNavigator = (routeName:string) => {
        const resetAction = CommonActions.reset({
            index: 1,
            routes: [{ name: routeName}]
        });
        navigation.dispatch(resetAction);
    }

    const onRecoverPasswordPress = async () => {
        try{
            await apiCaller.call('/user/forgotPassword', 'POST', {email: email});
            alert("We have sended an email to '"+email+"'")
            resetStackNavigator('login');  
        }
        catch(e){
            alert("Invalid email: '"+email+"'");
            setEmail('');
        }
         
    }
    const onBackPress = async () => {
        resetStackNavigator('login');
    }
    return (
        <View style={{ flex:1 }}>
        <View style={{alignSelf:'center', flex:1, width:'40%', marginBottom:'5%', marginTop:50}}>
            <View style={{ flex:10, flexDirection:'column'}}>
                <TextInput
                    mode= 'outlined'
                    label='Email'
                    placeholder='Email'
                    value={email}
                    autoCompleteType='email'
                    keyboardType='email-address'
                    onChangeText={text=> setEmail(text)}
                    style={{marginBottom:40}}            
                />
            </View>
            <View style={{ flex:1, flexDirection:'column', justifyContent:'flex-start' }}>
                <Button mode='contained' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=> onRecoverPasswordPress()}>Recuperar</Button>
            </View>
            <View style={{ flex:1, flexDirection:'column', justifyContent:'flex-start' }}>
                <Button mode='contained' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=>  onBackPress()}>Atras</Button>
            </View>
        </View>
        </View>
    );
};
export default memo(ForgotPasswordScreen);