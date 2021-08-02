import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ViewScreen, UpdateScreen, CreateScreen, RegisterScreen, LoginScreen, ForgotPasswordScreen } from '../pages';
import Header from './Header';
import { Navigation } from '../types';
import {UserContext} from '../context/user/UserState';

const StackNavigator = () => {
    // state variables
    const [headerBorder, setHeaderBorder] = React.useState(0);
    const [headerStyle, setHeaderStyle] = React.useState('default');
    const { user} = useContext(UserContext)
    // Create stack navigator
    const Stack = createStackNavigator();                       
    // returns the name of the screen that is first route
    const getInitialRoute = () => {
        if(user.email){
            return "home";
        }
        return "login";
    }
 

    const getHeader = ( navigation: any, previous:any ) => {
        const title = "Titulo de la app";   
        return (
            <Header navigation={navigation} title={title} previous={previous}></Header>
        );
    }

    return (
        <Stack.Navigator
            initialRouteName={getInitialRoute()}
            headerMode="screen"
            screenOptions={{
                header: ({ navigation, previous }) => {
                    return getHeader(navigation, previous);
                }
            }}
        >
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="update" component={UpdateScreen} />
            <Stack.Screen name="view" component={ViewScreen} />
            <Stack.Screen name="create" component={CreateScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
};

export default React.memo(StackNavigator);