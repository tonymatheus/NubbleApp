import React from 'react';
import {Box} from '../Box/Box';
import {Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface ScreenProps {
  children?: React.ReactNode;
}

export const Screen = ({children}: ScreenProps) => {
  const {top} = useAppSafeArea();
  console.log({
    device: Platform.OS,
    top,
  });
  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {children}
    </Box>
  );
};
