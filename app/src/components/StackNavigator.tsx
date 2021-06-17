import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ListScreen, ViewScreen, UpdateScreen, CreateScreen} from '../pages';
import AppHeader from './AppHeader';

const StackNavigator = () => {

    const [headerBorder, setHeaderBorder] = React.useState(0);
    const [headerStyle, setHeaderStyle] = React.useState('default');
    const Stack = createStackNavigator();                       

    const getInitialRoute = (ready: boolean, loggedin: boolean) => {
        return "home";
    }
 

    const getMenuBar = ( navigation ) => {
        const title = "Titulo de la app";   
        return (
            <AppHeader navigation={navigation} title={title}></AppHeader>
        );
    }

    return (
        <Stack.Navigator
            initialRouteName={getInitialRoute()}
            headerMode="screen"
            screenOptions={{
                header: ({ navigation }) => {
                    return getMenuBar(navigation);
                }
            }}
        >
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="list" component={ListScreen} />
            <Stack.Screen name="update" component={UpdateScreen} />
            <Stack.Screen name="view" component={ViewScreen} />
            <Stack.Screen name="create" component={CreateScreen} />
        </Stack.Navigator>
    );
};

export default React.memo(StackNavigator);