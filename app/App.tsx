import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme';
import App from './src/App';

function Main() {
  return (
    <PaperProvider theme={theme}>
        <App/>
    </PaperProvider>
  );
}
export default Main;