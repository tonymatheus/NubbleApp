import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage?: boolean;
}

export const PostCommentBottom = ({fetchNextPage, hasNextPage}: Props) => {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text bold color="primary" textAlign="center">
          ver mais
        </Text>
      </Pressable>
    );
  }
  return null;
};
