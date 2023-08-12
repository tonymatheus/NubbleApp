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

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text bold preset="headingLarge">
        Coffstack
      </Text>
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button title={'Teste'} />
      </View>
    </SafeAreaView>
  );
}

export default App;
