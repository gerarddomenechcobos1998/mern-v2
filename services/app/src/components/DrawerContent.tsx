import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import Menu from './Menu';

export function DrawerContent(props:any) {

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent} {...props}>
      <Menu navigation={props.navigation}/>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  }
});