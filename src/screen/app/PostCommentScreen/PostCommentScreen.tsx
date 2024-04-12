import React from 'react';

import {usePostCommentList} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  const postID = route?.params?.postId;

  usePostCommentList(postID);

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
};
