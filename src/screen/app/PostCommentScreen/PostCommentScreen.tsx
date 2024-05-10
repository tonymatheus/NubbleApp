import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList, useUser} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  const postID = route?.params?.postId;
  const postAuthorId = route.params?.postAuthorId;
  const {list, fetchNextPage, hasNextPage, refresh} =
    usePostCommentList(postID);

  const {bottom} = useAppSafeArea();
  const {id} = useUser();

  const renderItem = ({item}: ListRenderItemInfo<PostComment>) => {
    return (
      <Box>
        <PostCommentItem
          postComment={item}
          key={postID}
          onRemoveComment={refresh}
          postAuthorId={postAuthorId}
          userId={id}
        />
      </Box>
    );
  };

  return (
    <Screen title="Comentários" canGoBack flex={1}>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          key={postID}
          keyExtractor={item => item.id.toString()}
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
        <PostCommentTextMessage postID={postID} onAddComment={refresh} />
      </Box>
    </Screen>
  );
};
