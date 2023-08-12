/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text bold preset="headingLarge">
          Coffstack
        </Text>
        <View>
          <Button title={'Teste'} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
