import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme';
import App from './src/App';
import { UserProvider } from './src/context/user/UserState';

function Main() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <App/>
      </UserProvider>
    </PaperProvider>
  );
}
export default Main;