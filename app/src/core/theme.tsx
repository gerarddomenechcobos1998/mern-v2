import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  fonts: {
    regular: {fontFamily:"Archivo-Regular"},
    medium: {fontFamily:"Archivo-Medium"},
    light: {fontFamily:"Archivo-Light"},
    bold: {fontFamily:"Archivo-Bold"}
  },
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: 'black',
    secondary: '#F05A28',
    shadedBox: '#efefef',
    navBar: 'white',
    colorTitleSection: '#555',
    colorParagraphItem: '#777',
    companyTextColor: '#76848b',
    text: '#141c27'
  },
  gradients: {
    main: ['black', 'black']
  }
};
