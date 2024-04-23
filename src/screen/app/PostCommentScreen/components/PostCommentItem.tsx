import React from 'react';

import {PostComment} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

export interface Props {
  postComment: PostComment;
}

export const PostCommentItem = ({postComment}: Props) => {
  return (
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
  );
};
