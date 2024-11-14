import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

export interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export const PostCommentItem = ({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: Props) => {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({
        message: 'Cometário deletado',
      });
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  const confirmRemove = () => {
    Alert.alert('Deseja excluir o comentário', 'precione confirmar', [
      {
        text: 'confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'cancelar',
        style: 'cancel',
      },
    ]);
  };

  return (
    <Pressable onLongPress={confirmRemove} disabled={!isAllowToDelete}>
      <Box flexDirection="row" alignItems="center" marginBottom="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box marginLeft="s12" flex={1}>
          <Text bold preset="paragraphSmall">
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};
