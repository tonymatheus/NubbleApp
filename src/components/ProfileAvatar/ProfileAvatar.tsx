import React from 'react';
import {Image} from 'react-native';

import {Box} from '@components';

interface ProfileAvatarProps {
  imageURL: string;
  /**@default 32 */
  size?: number;
  /**@default 14 */
  borderRadius?: number;
}

export const ProfileAvatar = ({
  imageURL,
  size = 32,
  borderRadius = 14,
}: ProfileAvatarProps) => {
  return (
    <Box>
      <Image
        source={{uri: imageURL}}
        style={{width: size, height: size, borderRadius: borderRadius}}
      />
    </Box>
  );
};
