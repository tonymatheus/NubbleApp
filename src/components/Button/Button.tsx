import React from 'react';

import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export const Button = ({title, loading}: ButtonProps) => {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s10"
      paddingVertical="s10"
      height={50}
      alignItems="center"
      justifyContent="center"
      //   style={{
      //     borderRadius: 18,
      //     paddingVertical: 14,
      //     paddingHorizontal: 20,
      //     backgroundColor: colors.carrotSecondary,

      //     alignItems: 'center',
      //     width: '100%',
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </Box>
  );
};
