import React, { memo, useState } from 'react';
import { View, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Navigation } from '../types';
import { theme } from '../core/theme';
import ApiCaller from '../core/ApiCaller';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
    
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ rePassword, setRePassword ] = useState<string>('');
    
    const emailValidator = (email: string) =>{
        console.log(email);
        // estructura de un email:  nombre_usuario+@+servidor+dominio, eg pitu@gmail.com
        // SOURCE: http://lineadecodigo.com/javascript/validar-el-email-con-javascript/
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

    const onRegisterPress = () => {
        // if (emailValidator(email) && validarContraseña(password, rePassword)){
        if (validarContraseña(password, rePassword) && emailValidator(email)){
            console.log("registrado");
        }
        else{
            console.log("no registrado");
        }
    }

    return (
        <View style={{ flex:1 }}>
        <View style={{alignSelf:'center', flex:1, width:'40%', marginBottom:'5%', marginTop:50}}>
            <View style={{ flex:10, flexDirection:'column', borderWidth:1 }}>
            <TextInput
                mode= 'outlined'
                label='Email'
                placeholder='Email'
                value={email}
                onChangeText={text=> setEmail(text)}
                style={{marginBottom:40}}
            />
            <TextInput
                mode= 'outlined'
                label='Contraseña'
                placeholder='Contraseña'
                value={password}
                onChangeText={text=> setPassword(text)}
                style={{marginBottom:40}}
            />
            <TextInput
                mode= 'outlined'
                label='Repetir contraseña'
                placeholder='Repetir contraseña'
                value={rePassword}
                onChangeText={text=> setRePassword(text)}
                style={{}}
            />
            </View>
            <View style={{ flex:1, flexDirection:'column', justifyContent:'flex-start', borderWidth: 1 }}>
                <Button mode='contained' style={{ alignSelf:'center', width:200}} uppercase={false} onPress={()=> onRegisterPress()}>Registrarse</Button>
            </View>
        </View>
        </View>
    );
};
export default memo(RegisterScreen);