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
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text bold preset="headingLarge">
            Olá
          </Text>
          <Text marginBottom="s40" preset="paragraphLarge">
            Digite seu email e senha
          </Text>
          <Box marginBottom="s20">
            <TextInput
              label="e-mail"
              style={{
                borderWidth: 1,
                height: 50,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="email"
            />
          </Box>
          <Box>
            <TextInput
              label="senha"
              style={{
                borderWidth: 1,
                height: 50,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="password"
            />
          </Box>
          <Text color="primary" preset="paragraphSmall" marginTop="s10" bold>
            esqueci minha senha
          </Text>
          <Button title="Entrar" preset="primary" marginTop="s48" />
          <Button title="Criar Conta" preset="outline" marginTop="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
