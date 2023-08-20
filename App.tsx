/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text bold preset="headingLarge">
            Coffstack
          </Text>
          <Icon name="eyeOff" color="error" size={40} />
          <Icon name="eyeOn" color="errorLight" size={50} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
