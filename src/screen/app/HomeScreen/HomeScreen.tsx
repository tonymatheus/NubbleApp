/* eslint-disable no-console */
import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const isPostListEmpty = postList.length === 0 ? 1 : undefined;

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      setError(true);
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
        contentContainerStyle={{flex: isPostListEmpty}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty error={error} loading={loading} refetch={fetchData} />
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
