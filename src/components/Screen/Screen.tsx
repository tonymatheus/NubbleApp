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
} from '@components';
import {useAppTheme} from '@hooks';
import {useAppSafeArea} from '@hooks';

interface ScreenProps {
  children?: React.ReactNode;
  canGoback?: boolean;
  scrollable?: boolean;
}

export const Screen = ({children, canGoback, scrollable}: ScreenProps) => {
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
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoback && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              marginBottom="s24"
              flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold marginLeft="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
