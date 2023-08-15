import React from 'react';

import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ThemeColors} from '../../../theme/theme';
import {buttonPresets} from './ButtonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled: boolean;
}

export const Button = ({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...TouchableOpacityBoxProps
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s10"
      paddingVertical="s10"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset}
      {...TouchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
