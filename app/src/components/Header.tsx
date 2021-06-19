import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { memo } from 'react';
import { Appbar } from 'react-native-paper';
import {theme} from '../core/theme';
import { Navigation } from '../types';

type Props = {
    previous: any;
    title: string;
    navigation: any;
    headerBorder?: any;
};
 
const Header = ({ title, previous, navigation, headerBorder}: Props) => {
    const menuButton = () => {
        return <Appbar.Action icon="menu" onPress={() => {
            ((navigation as Navigation) as DrawerNavigationProp<{}>).openDrawer();
        }} />
    }
   
    return (
    <Appbar.Header style={{backgroundColor:theme.colors.navBar, height: 'auto', borderBottomColor: '#e3e3e3', elevation:0, borderBottomWidth: headerBorder }}>
        {
            previous 
            ?<Appbar.BackAction onPress={navigation.goBack}/>
            : null
        }
        
        <Appbar.Content
                title={title}
                titleStyle={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: theme.colors.primary
                }}
            >
        </Appbar.Content>
        { menuButton()}
    </Appbar.Header>);
};

export default memo(Header);