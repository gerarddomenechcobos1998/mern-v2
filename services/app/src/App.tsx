import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import StackNavigator from './components/StackNavigator';
import { Platform, View } from 'react-native'
import * as Linking from 'expo-linking';
import { useFonts } from 'expo-font';


const Drawer = createDrawerNavigator();

const noGlow = `
textarea, select, input {
	-webkit-appearance: none;
	outline: none!important;
}
textarea:focus, select:focus, input:focus, button:focus {
	-webkit-appearance: none;
	outline: none!important;
}

html, body {
	overflow-x: hidden;
}
`

export const injectWebCss = () => {

	// Only on web
	if (Platform.OS != 'web') return

	// Inject style
	const style = document.createElement('style')
	style.textContent = noGlow;
	return document.head.append(style)
}

// 👉 And this in the App.js file
injectWebCss()
const prefix = Linking.makeUrl('/');

const linking = {
	prefixes: [prefix],
	config: {
		screens: {
			app: {
					create: 'create',
					update: 'update',
					view:'view',
                    home:'home',
					register: 'register'
			}
		}
	},
	enabled: true,
};

export default function App() {
	let [fontsLoaded] = useFonts({
		'Archivo-Bold': require('./assets/fonts/Archivo-Bold.ttf'),
		'Archivo-Light': require('./assets/fonts/Archivo-Light.ttf'),
		'Archivo-Medium': require('./assets/fonts/Archivo-Medium.ttf'),
		'Archivo-Regular': require('./assets/fonts/Archivo-Regular.ttf'),
	  });

	if (!fontsLoaded) {
		return <View></View>;
	} else {
		return (
			<View style={{flex:1}}>
				<NavigationContainer linking={linking}>
					<Drawer.Navigator overlayColor="0" drawerType="slide" drawerPosition='right'
						// drawerContent={<DrawerContent/>}
					>
						<Drawer.Screen name="app" component={StackNavigator} />
					</Drawer.Navigator>
				</NavigationContainer>
			</View>

		);
	}
}
