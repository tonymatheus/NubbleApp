import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

import {buttonPresets} from './ButtonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export const Button = ({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...TouchableOpacityBoxProps
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled}
      paddingHorizontal="s10"
      paddingVertical="s10"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...TouchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={'carrotSecondary'} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
