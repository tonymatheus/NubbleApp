import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './HomeHeader/HomeHeader';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  const renderPostItem = ({item}: ListRenderItemInfo<Post>) => {
    return <PostItem post={item} />;
  };

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderPostItem}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
