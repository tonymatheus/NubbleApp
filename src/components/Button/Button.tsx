import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../../theme/theme';

interface ButtonProps {
  title: string;
}

export const Button = ({title}: ButtonProps) => {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: colors.carrotSecondary,

        alignItems: 'center',
        width: '100%',
      }}>
      <Text preset="headingMedium" style={{color: '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
