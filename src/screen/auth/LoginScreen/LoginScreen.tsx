import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  TouchableOpacityBox,
  FormPasswordInput,
  FormTextInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {LoginSchema, loginScheme} from './loginScheme';

export const LoginScreen = ({navigation}: AuthScreenProps<'LoginScreen'>) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({email, password}: LoginSchema) => {
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`);
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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="senha"
        placeholder="digite sua senha"
        boxProps={{marginBottom: 's20'}}
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
