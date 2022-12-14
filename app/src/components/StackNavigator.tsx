import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen, LoginScreen, ForgotPasswordScreen} from "../pages";
import Header from "./Header";
import { useAppStore } from "../context/appStore";
import Screens from "../app/Screens";

const StackNavigator = () => {
  // state variables
  const { session } = useAppStore();
  // Create stack navigator
  const Stack = createStackNavigator();

  const getInitialRoute = (ready: boolean, loggedin: boolean) => {
    if (!ready) {
      return "login";
    } else if (!loggedin) {
      return "login";
    }
    return "home";
  };

  const isLoggedIn = () => {
    return (session.ready && session.loggedIn) ? true : false;
  };

  const getHeader = (navigation: any, previous: any) => {
    return <Header navigation={navigation} previous={previous}></Header>;
  };

  return (
    <Stack.Navigator
      initialRouteName={getInitialRoute(session.ready, session.loggedIn)}
      headerMode="screen"
      screenOptions={{
        header: ({ navigation, previous }) => {
          return getHeader(navigation, previous);
        },
      }}
    >
      {!isLoggedIn() ? (
        <Stack.Screen name="login" component={LoginScreen} />
      ) : null} 
      {
        isLoggedIn() ?
          Screens.map((screen)=>{
           return(<Stack.Screen name={screen.name} component={screen.component} />)
          })
          :null
      }
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(StackNavigator);
