import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentBottom, PostCommentItem} from './components';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  const postID = route?.params?.postId;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postID);

  const {bottom} = useAppSafeArea();

  const renderItem = ({item}: ListRenderItemInfo<PostComment>) => {
    return (
      <Box>
        <PostCommentItem postComment={item} key={postID} />
      </Box>
    );
  };

  return (
    <Screen title="Comentários" canGoBack>
      <FlatList
        data={list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: bottom}}
        ListFooterComponent={
          <PostCommentBottom
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        }
      />
    </Screen>
  );
};
