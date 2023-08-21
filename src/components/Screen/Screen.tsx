import React from 'react';
import {Box} from '../Box/Box';
import {Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

interface ScreenProps {
  children?: React.ReactNode;
  canGoback?: boolean;
}

export const Screen = ({children, canGoback}: ScreenProps) => {
  const {top} = useAppSafeArea();
  console.log({
    device: Platform.OS,
    top,
  });
  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoback && (
        <Box marginBottom="s24" flexDirection="row">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphMedium" semiBold marginLeft="s8">
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
};
