import React, { memo } from 'react';
import { Platform, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    searchQuery:string;
    onChangeSearch:any;
    onSubmit:any;
    onClose:any;
    placeholder:string
}
// /////////////////////
// README

//     1. It is needed to implement a useState variable at father where this component is placed with the following shape:
//     [searchQuery, setSearchQuery] = React.useState('')

//     Props available:
//         - searchQuery: actual value of the search frase
//         - placeholder: text that is shown when searchQuery is empty
//         - onChangeSearch: function that is called every time the searchQuery changes
//         - onSubmit: function that is called when press intro key
//         - onClose: function that is called when press the close menu
// //////////////////////

const Searchbar = ({searchQuery, placeholder, onChangeSearch, onSubmit, onClose}:Props) => {

    return (
        <View style={{flexDirection:'column', flex:1, width: Platform.OS=='web'?'100%': '80%'}}>  
            <View style={{maxWidth:700, flexDirection:'row', width:'95%', alignSelf: Platform.OS=='web'?'center': 'flex-start', borderRadius: 30, marginTop: 5, padding: 9, marginHorizontal: 12, elevation:5, shadowRadius:6, shadowOpacity:0.3, backgroundColor: 'white'}}>
            <MaterialCommunityIcons
                name={'magnify'}
                size={26}
                color="#6F6F6F"
                style={{opacity: 1, textAlign:"center", marginRight:10}}
            />
            <TextInput 
                style={{fontSize: 15, flex:1}}    
                placeholder={placeholder}
                onChangeText={onChangeSearch}
                autoCorrect={false}
                clearButtonMode="always"
                enablesReturnKeyAutomatically={true}
                returnKeyType="search"
                spellCheck={false}
                onSubmitEditing={onSubmit}
            />
            {
            searchQuery!=''?<MaterialCommunityIcons
                name={'close-circle-outline'}
                size={26}
                color="#6F6F6F"
                style={{opacity: 1, textAlign:"center", marginLeft:5, alignSelf:'flex-end'}}
                onPress={onClose}
            />:null
            }
            </View>
        </View>
    );
};

export default memo(Searchbar);
