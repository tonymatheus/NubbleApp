import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export const PostBottom = ({author, text, commentCount, id}: Props) => {
  const commentText = getComentTex(commentCount);
  const navigation = useNavigation();

  const navigateToPostCommentScreen = () => {
    navigation.navigate('PostCommentScreen', {
      postId: id,
    });
  };

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <Text
        color="buttonPrimary"
        preset="paragraphSmall"
        bold
        onPress={navigateToPostCommentScreen}>
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
