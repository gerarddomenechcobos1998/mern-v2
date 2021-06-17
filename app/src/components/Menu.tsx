import React, { memo } from 'react';
import {StyleSheet, View } from 'react-native';
import { Title, Drawer } from 'react-native-paper';
import {
    DrawerItem,
    DrawerContentScrollView,
    DrawerNavigationProp,
  } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
};

const Menu = ({}: Props) => (
    <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
            <Title style={styles.title}>Menu Title</Title>
        </View>
        <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
                icon={(data:any) => (
                <MaterialCommunityIcons
                    name="logout"
                    color={data.color}
                    size={data.size}
                />
                )}
                label="Cerrar sesión"
                onPress={() => {}}
            />
        </Drawer.Section>
    </View>
);

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