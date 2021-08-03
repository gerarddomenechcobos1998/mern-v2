import React, { memo } from 'react';
import { Appbar } from 'react-native-paper';
import {theme} from '../core/theme';


type Props = {
    previous: any;
    navigation: any;
    headerBorder?: any;
};
 
const Header = ({ previous, navigation, headerBorder}: Props) => {
    const menuButton = () => {
        return <Appbar.Action icon="menu" onPress={() => {
            navigation.openDrawer();
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
                title={'Hello from app'}
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