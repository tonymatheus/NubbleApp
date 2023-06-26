/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: 'red'}}>
        Teste App
      </Text>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-Black'}}>
        Teste App
      </Text>
      <Text preset="headingMedium" style={{color: 'red'}}>
        Teste App
      </Text>
    </SafeAreaView>
  );
}

export default App;
