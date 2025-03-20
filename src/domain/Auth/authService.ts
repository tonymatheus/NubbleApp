import {authApi} from './authApi';
import {AuthCredentials} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const AuthCredentialsAPI = await authApi.signIn(email, password);
    return AuthCredentialsAPI;
  } catch (error) {
    throw new Error('email e senha inválidos');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

export const authService = {
  signIn,
  signOut,
};
