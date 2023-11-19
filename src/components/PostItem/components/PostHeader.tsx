import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author'>;

export const PostHeader = ({author}: Props) => {
  return (
    <Box marginBottom="s24">
      <Box flexDirection="row" alignItems="center" marginBottom="s16">
        <Image
          source={{uri: author.profileURL}}
          style={{width: 32, height: 32, borderRadius: 14}}
        />
        <Text preset="paragraphMedium" marginLeft="s12">
          {author.userName}
        </Text>
      </Box>
    </Box>
  );
};
