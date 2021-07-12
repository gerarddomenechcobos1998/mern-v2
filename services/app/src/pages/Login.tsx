import React, { memo, useState, useContext } from 'react';
import { View, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ApiCaller from '../core/ApiCaller';
import { CommonActions } from '@react-navigation/native';
import Storage from '../core/Storage';
import {UserContext} from '../context/user/UserState';
import User from '../models/user';

type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ visible, setVisible ] = useState<boolean>(false);
    const {user, setUser} = useContext(UserContext)

    var apiCaller = new ApiCaller();


    const onToggleShowPassword = () => {
        setVisible(!visible);
    }

    const resetStackNavigator = (routeName:string) => {
        const resetAction = CommonActions.reset({
            index: 1,
            routes: [{ name: routeName}]
        });
        navigation.dispatch(resetAction);
    }
    const onLogginPress = async () => {
        // Llamar a la api y ver si las contraseñas coinciden
        let userTmp: any = {};
        userTmp.email = email;
        userTmp.password = password; // se envia en claor, añadir certificado SSL
        let res:any;
        try{
            res = await apiCaller.call('/user/validate','POST', userTmp);
            await Storage.write('user', res);
            const storedUser = await Storage.read('user');
            setUser(User.prototype.load(storedUser));
            resetStackNavigator('home'); 
        }catch(e){
            console.error(e);
            setEmail('');
            setPassword('');
            alert("No valid credentials!");    
        }
        //si la respuesta es correcta validamos
        // Hacer un use context del usuario
        // Entrar en Home       
          
    }
    const onRegisterPress = async () => {
        resetStackNavigator('register');   
    }

    return (
        <View style={{ flex:1 }}>
        <View style={{alignSelf:'center', flex:1, width:'80%', maxWidth:400, marginBottom:'5%', marginTop:50}}>
            <View style={{ flex:10, flexDirection:'column'}}>
                <TextInput
                    mode= 'outlined'
                    label='Email'
                    placeholder='Email'
                    autoCompleteType='email'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={text=> setEmail(text)}
                    style={{marginBottom:40}}            
                />
                <TextInput
                    mode= 'outlined'
                    label='Contraseña'
                    placeholder='Contraseña'
                    autoCompleteType='password'
                    autoCorrect= {false}
                    onChangeText={text=> setPassword(text)}
                    value={password}
                    style={{marginBottom:40}}
                    secureTextEntry={!visible}
                    right= {<TextInput.Icon name={visible?'eye-off':'eye'} onPress={()=> onToggleShowPassword()}/>}
                />
                <View style={{flexDirection:'column', flex:1}}>
                    <Text onPress={()=>{resetStackNavigator('forgotPassword')}} style={{textAlign:'right', fontSize:18, lineHeight:20, fontWeight:'700'}}>Forgot password?</Text>
                </View>
            </View>
            <View style={{ flex:1, flexDirection:'column', justifyContent:'flex-start' }}>
                <Button mode='contained' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=> onLogginPress()}>Entrar</Button>
            </View>
            <View style={{ flex:1, flexDirection:'column', justifyContent:'flex-start' }}>
                <Button mode='outlined' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=> onRegisterPress()}>Registrar</Button>
            </View>
        </View>
        </View>
    );
};
export default memo(LoginScreen);