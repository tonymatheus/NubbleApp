import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const {list, isPostListEmpty, refresh, isLoading, isError, fetchNextPage} =
    usePostList();
  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  const renderPostItem = ({item}: ListRenderItemInfo<Post>) => {
    return <PostItem post={item} />;
  };

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={item => item.id.toString()}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        renderItem={renderPostItem}
        contentContainerStyle={{flex: isPostListEmpty}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty error={isError} loading={isLoading} refetch={refresh} />
        }
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
  flex: 1,
};
