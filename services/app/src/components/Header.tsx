import React, { memo, useRef } from 'react';
import { Appbar } from 'react-native-paper';
import {theme} from '../core/theme';
import {Platform, View} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

type Props = {
    previous: any;
    navigation: any;
    headerBorder?: any;
};
 
const Header = ({ previous, navigation, headerBorder}: Props) => {
    const refRBSheet = useRef();

    const menuButton = () => {
        return <Appbar.Action icon="menu" onPress={() => {
            Platform.OS== 'web'?navigation.openDrawer(): refRBSheet.current.open();
        }} />
    }
   
    return (
    <>  
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
        </Appbar.Header>
        {
        Platform.OS !='web'?
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            openDuration={250}
            height={400}
            animationType={'fade'}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.1)"
                },
                container:{
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                },
                draggableIcon: {
                    backgroundColor: "rgba(0,0,0,0.3)"
                }
                
            }}
        />:null
        }
    </>);
};

export default memo(Header);