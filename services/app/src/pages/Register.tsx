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
    const resetStackNavigator = (routeName:string) => {
        const resetAction = CommonActions.reset({
            index: 1,
            routes: [{ name: routeName}]
        });
        navigation.dispatch(resetAction);
    }
    const onRegisterPress = async () => {
        if (validarContraseña(password, rePassword) && emailValidator(email)){
            // register
            let user: any = {};
            user.email = email;
            user.password = password;
            try{
            await apiCaller.call('/user/register','POST', user);
            resetStackNavigator('login');
            }catch(e){
            console.error(e);
            // if we get a conflict with the email (already exist) we reset all.
            alert("The email '"+email+"' was already registered!")
            setPassword('');
            setRePassword('');
            setEmail('');
            }        
        }
        else{
            if(validarContraseña(password, rePassword)){
                alert("Las contraseñas no coinciden");
            }
            if(emailValidator(email)){
                alert("El email introducido, '"+email+"' no es un email valido");
            }
            console.log("no registrado");
        }
    }
    const onBackPress = async () => {
        resetStackNavigator('login');
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
                style={{marginBottom:40}}
                secureTextEntry={!visible}
                right= {<TextInput.Icon name={visible?'eye-off':'eye'} onPress={()=> onToggleShowPassword()}/>}
            />
            <TextInput
                mode= 'outlined'
                label='Repetir contraseña'
                placeholder='Repetir contraseña'
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