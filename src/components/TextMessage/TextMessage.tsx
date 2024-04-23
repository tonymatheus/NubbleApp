import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {$textInputStyle, Box, Text} from '@components';
import {useAppTheme} from '@hooks';

interface TextMessageProps extends RNTextInputProps {
  label: string;
  onPressSend: () => void;
}

export const TextMessage = ({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) => {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  const sendIsDisabled = value?.trim().length === 0;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
        <Pressable onPress={onPressSend} disabled={sendIsDisabled}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
};
