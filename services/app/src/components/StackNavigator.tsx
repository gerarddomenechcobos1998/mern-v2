import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ViewScreen, UpdateScreen, CreateScreen, RegisterScreen, LoginScreen, ForgotPasswordScreen } from '../pages';
import Header from './Header';
import { useAppStore } from '../context/appStore';

const StackNavigator = () => {
    // state variables
    const {session} = useAppStore();
    // Create stack navigator
    const Stack = createStackNavigator();                       

    const isLoggedIn = () => {
        return session.loggedIn?true:false;
    }

    const getInitialRoute = () => {
        return isLoggedIn()?"home":"login";
    }
 

    const getHeader = ( navigation: any, previous:any ) => { 
        return (
            <Header navigation={navigation} previous={previous}></Header>
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
            {
                isLoggedIn()?<Stack.Screen name="home" component={HomeScreen} />:null
            }
            {
                isLoggedIn()?<Stack.Screen name="update" component={UpdateScreen} />:null
            }
            {
                isLoggedIn()?<Stack.Screen name="view" component={ViewScreen} />:null
            }
            {
                isLoggedIn()?<Stack.Screen name="create" component={CreateScreen} />:null
            }
            {  
                <>
                    <Stack.Screen name="register" component={RegisterScreen} />
                    <Stack.Screen name="login" component={LoginScreen} />
                    <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
                </>
            }
        </Stack.Navigator>
    );
};

export default React.memo(StackNavigator);