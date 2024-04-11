import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {ScrollViewContainer, ViewContainer, Box, BoxProps} from '@components';
import {useAppTheme} from '@hooks';
import {useAppSafeArea} from '@hooks';

import {ScreenHeader} from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export const Screen = ({
  children,
  canGoBack,
  scrollable,
  style,
  title,
  ...BoxProps
}: ScreenProps) => {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          //paddingBottom="s24"
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...BoxProps}>
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
