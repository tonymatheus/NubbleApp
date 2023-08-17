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
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text bold preset="headingLarge">
            Coffstack
          </Text>

          <Button preset="primary" title={'entrar'} marginBottom="s12" />
          <Button
            disabled
            preset="outline"
            title={'outline'}
            marginBottom="s12"
          />

          <Button
            preset="outline"
            loading
            disabled
            title={'Teste'}
            marginBottom="s12"
          />
          <Button
            preset="outline"
            loading
            disabled
            title={'Teste'}
            marginBottom="s12"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
