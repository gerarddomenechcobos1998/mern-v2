import React, { memo, useState } from 'react';
import { View, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Navigation } from '../types';
import ApiCaller from '../core/ApiCaller';
import { CommonActions } from '@react-navigation/native';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ rePassword, setRePassword ] = useState<string>('');
    const [ visible, setVisible ] = useState<boolean>(false);
    const [ hash, setHash ] = useState('');

    var apiCaller = new ApiCaller();
    
    const emailValidator = (email: string) =>{
        console.log(email);
        // estructura de un email:  nombre_usuario+@+servidor+dominio, eg: user6840@gmail.com
        // use of Regex to validate
        const regexValidator = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const result = regexValidator.test(email)? true:false;
        if(!result) alert("La dirección de email es incorrecta, debe tener la siguiente estructura: XXXX@yyyy.zzzz");
        return result;
    }
    const validarContraseña = (password: string, rePassword: string) => {
        const result = (password === rePassword)?true:false;
        return result;
    }

    const onToggleShowPassword = () => {
        setVisible(!visible);
    }

    const generateHashAndSendRequest = async (password:string) => {
        const bcrypt = require("bcryptjs")
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, async function (saltError: any, salt: any) {
            if (saltError) {
              throw saltError
            } else {
                bcrypt.hash(password, salt, async function(hashError:any, hash:any) {
                if (hashError) {
                  throw hashError
                } else {
                  //setHash(hash);
                  let user: any = {};
                  user.email = email;
                  user.password = hash;
                  await apiCaller.call('/user','POST', user);
                }
              })
            }
        })
    }
    const resetStackNavigator = (routeName:string) => {
        const resetAction = CommonActions.reset({
            index: 1,
            routes: [{ name: routeName}]
        });
        navigation.dispatch(resetAction);
    }
    const onRegisterPress = () => {
        if (validarContraseña(password, rePassword) && emailValidator(email)){
            // generate hash to encrypt the password
            generateHashAndSendRequest(password);
            
            // TO DO: validate if register was right, missing validation of setting email as unique key
            resetStackNavigator('login');

        }
        else{
            console.log("no registrado");
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
            <TextInput
                mode= 'outlined'
                label='Contraseña'
                placeholder='Contraseña'
                value={password}
                autoCompleteType='password'
                autoCorrect= {false}
                onChangeText={text=> setPassword(text)}
                style={{marginBottom:40}}
                secureTextEntry={!visible}
                right= {<TextInput.Icon name={visible?'eye-off':'eye'} onPress={()=> onToggleShowPassword()}/>}
            />
            <TextInput
                mode= 'outlined'
                label='Repetir contraseña'
                placeholder='Repetir contraseña'
                value={rePassword}
                autoCompleteType='password'
                autoCorrect= {false}
                onChangeText={text=> setRePassword(text)}
                secureTextEntry={!visible}
            />
            </View>
            <View style={{ flex:1, flexDirection:'column', justifyContent:'flex-start' }}>
                <Button mode='contained' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=> onRegisterPress()}>Registrarse</Button>
            </View>
            <View style={{ flex:1, flexDirection:'column', justifyContent:'flex-start' }}>
                <Button mode='contained' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=>  onBackPress()}>Atras</Button>
            </View>
           
        </View>
        </View>
    );
};
export default memo(RegisterScreen);