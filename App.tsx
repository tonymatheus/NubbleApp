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
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

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
          <TextInput
            errorMessage="erro"
            label="e-mail"
            placeholder="email"
            boxProps={{marginBottom: 's10'}}
          />
          <TextInput
            label="senha"
            placeholder="password"
            RightComponent={<Icon color="gray2" name="eyeOn" />}
            boxProps={{marginBottom: 's20'}}
          />
          <Text color="primary" preset="paragraphSmall" bold>
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
