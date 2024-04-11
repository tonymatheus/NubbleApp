import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  ScrollViewContainer,
  ViewContainer,
  Text,
  Box,
  Icon,
  TouchableOpacityBox,
  BoxProps,
} from '@components';
import {useAppTheme} from '@hooks';
import {useAppSafeArea} from '@hooks';

interface ScreenProps extends BoxProps {
  children?: React.ReactNode;
  canGoback?: boolean;
  scrollable?: boolean;
  title?: string;
}

export const Screen = ({
  children,
  canGoback,
  scrollable,
  style,
  title,
  ...BoxProps
}: ScreenProps) => {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const navigation = useNavigation();

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
          {canGoback && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              marginBottom="s24"
              flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold marginLeft="s8">
                {title}
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
