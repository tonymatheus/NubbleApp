import React from 'react';

import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../../theme/theme';
import {Box, TouchableOpacityBox} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export const Button = ({title, loading}: ButtonProps) => {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacityBox
      backgroundColor="carrotSecondary"
      paddingHorizontal="s10"
      paddingVertical="s10"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
