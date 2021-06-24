import React, { memo, useState } from 'react';
import { View, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Navigation } from '../types';
import { theme } from '../core/theme';
import ApiCaller from '../core/ApiCaller';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
    
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ visible, setVisible ] = useState<boolean>(false);
    const [ hash, setHash ] = useState('');

    var apiCaller = new ApiCaller();


    const onToggleShowPassword = () => {
        setVisible(!visible);
    }

    const onLogginPress = async () => {
        // Llamar a la api y ver si las contraseñas coinciden
        // Hacer un use context del usuario
        // Entrar en Home       
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
        </View>
        </View>
    );
};
export default memo(LoginScreen);