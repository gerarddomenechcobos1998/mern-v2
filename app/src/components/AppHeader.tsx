import React, { memo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Header from './Header';

const AppHeader = (prop:any) => {
    return(
        <Header 
            title={prop.title}
            navigation={prop.navigation}
            headerBorder={prop.headerBorder}>
        </Header>
    );
}

export default memo(AppHeader);