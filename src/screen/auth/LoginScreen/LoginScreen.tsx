import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamList} from '../../../routes/Routes';
import {TouchableOpacityBox} from '../../../components/Box/Box';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';

type LoginFormType = {
  email: string;
  password: string;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: ScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({email, password}: LoginFormType) => {
    Alert.alert(`Email: ${email} ${`\n`} Senha: ${password}`);  
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <Screen scrollable>
      <Text bold preset="headingLarge">
        Olá
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu email e senha
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'senha obrigatória',
          minLength: {
            value: 8,
            message: 'a senha deve conter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="senha"
            placeholder="digite sua senha"
            boxProps={{marginBottom: 's20'}}
          />
        )}
      />

      <TouchableOpacityBox onPress={navigateToForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold>
          esqueci minha senha
        </Text>
      </TouchableOpacityBox>
      <Button
        title="Entrar"
        preset="primary"
        marginTop="s48"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
      <Button
        title="Criar Conta"
        preset="outline"
        marginTop="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
};
