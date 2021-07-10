import React, { memo, useState } from 'react';
import { View, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ApiCaller from '../core/ApiCaller';
import { CommonActions } from '@react-navigation/native';

type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
    
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ visible, setVisible ] = useState<boolean>(false);
    const [ matchedPassword, setMatchedPassword ] = useState(false);

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
        let user: any = {};
        user.email = email;
        user.password = password; // se envia en claor, añadir certificado SSL
        let res:any;
        try{
            res = await apiCaller.call('/user/validate','POST', user);
            resetStackNavigator('home'); 
        }catch(e){
            console.error(e);
            setEmail('');
            setPassword('');
            alert("Credenciales no válidas");    
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