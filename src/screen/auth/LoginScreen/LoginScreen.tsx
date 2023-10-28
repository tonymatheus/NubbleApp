import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text, Screen} from '@components';
import {Button} from '../../../components/Button/Button';

// import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamList} from '../../../routes/Routes';
import {TouchableOpacityBox} from '../../../components/Box/Box';
import {Alert} from 'react-native';
import {FormTextInput} from '../../../components/Form/FormTextInput//FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormTextInput/FormPasswordInput';
import {LoginSchema, loginScheme} from './loginScheme';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: ScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({email, password}: LoginSchema) => {
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
