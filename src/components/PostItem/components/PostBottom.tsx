import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export const PostBottom = ({author, text, commentCount}: Props) => {
  const commentText = getComentTex(commentCount);

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <Text color="buttonPrimary" preset="paragraphSmall" bold>
        ver {commentText}
      </Text>
    </Box>
  );
};

const getComentTex = (commentCount: number): string | null => {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
};
