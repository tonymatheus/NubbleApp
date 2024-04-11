import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const PostCommentScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  //route.params.postId
  return (
    <Screen title="Comentários" canGoback>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
};
