import React from 'react';
import { StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Divider,
} from 'react-native-paper';

import Menu from './Menu';

export function DrawerContent(props:any) {

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent} {...props}>
      <Divider style={{ position: 'absolute', opacity: 0.8, left: 0, width: 1, height: '100%' }} />
      <Menu></Menu>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  }
});