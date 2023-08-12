import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProps {
  title: string;
}

export const Button = ({title}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: '#074c4e',

        alignItems: 'center',
        width: '100%',
      }}>
      <Text preset="headingMedium" style={{color: '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
