import React, {useState} from 'react';

import {TextInput, TextInputProps} from '@components';
import {Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(prev => !prev);
  };

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
      boxProps={{marginBottom: 's40'}}
    />
  );
};
