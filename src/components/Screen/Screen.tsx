import React from 'react';
import {Box} from '../Box/Box';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainers';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ScreenProps {
  children?: React.ReactNode;
  canGoback?: boolean;
  scrollable?: boolean;
}

export const Screen = ({children, canGoback, scrollable}: ScreenProps) => {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  console.log({
    device: Platform.OS,
    top,
  });

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
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
      </Container>
    </KeyboardAvoidingView>
  );
};
