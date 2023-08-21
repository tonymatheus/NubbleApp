/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme/theme';
import {LoginScreen} from './src/screen/auth/LoginScreen/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignUpScreen} from './src/screen/auth/SignUpScreen/SignUpScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
