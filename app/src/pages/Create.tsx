import React, { memo, useState } from 'react';
import { View, Text,Alert,StyleSheet} from 'react-native';

import { Navigation } from '../types';
import { theme } from '../core/theme';

type Props = {
  navigation: Navigation;
};

const CreateScreen = ({ navigation }: Props) => {

return (
        <View style={{ flex:1}}>
                <Text>Create Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
  entry: {
    backgroundColor: theme.colors.background,

  },
  label: {
    color: theme.colors.text,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
export default memo(CreateScreen);