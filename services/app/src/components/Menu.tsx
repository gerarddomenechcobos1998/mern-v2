import React, { memo, useContext } from 'react';
import {StyleSheet, View } from 'react-native';
import { Title, Drawer } from 'react-native-paper';
import { DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Settings from '../core/Settings';
import { CommonActions } from '@react-navigation/native';
import {UserContext} from '../context/user/UserState';

type Props = {
  navigation:any;
};

const Menu = ({navigation}: Props) => {

  const {user} = useContext(UserContext);

  const resetStackNavigator = (routeName:string) => {
    const resetAction = CommonActions.reset({
        index: 1,
        routes: [{ name: routeName}]
    });
    navigation.dispatch(resetAction);
  }

  const _logOut = async ()=>{
    await Settings.logout();
    // Error with this navigation, import from parent
    navigation.closeDrawer();
    resetStackNavigator('login');
  }

  return(
    <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
            <Title style={styles.title}>{user.email}</Title>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          {
            user.token?
            <DrawerItem
              icon={(data:any) => (
              <MaterialCommunityIcons
                  name="logout"
                  color={data.color}
                  size={data.size}
              />
              )}
              label="Cerrar sesión"
              onPress={() => _logOut()}
            />
            :
            <DrawerItem
              icon={(data:any) => (
              <MaterialCommunityIcons
                  name="login"
                  color={data.color}
                  size={data.size}
              />
              )}
              label="Login"
              onPress={() => resetStackNavigator('login')}
            />
          }
        </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 20,
      fontWeight: 'bold',
    },
    drawerSection: {
      marginTop: 15,
    }
});

export default memo(Menu);