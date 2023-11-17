import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<Post>) => {
    return (
      <Box>
        <Box flexDirection="row">
          <Image
            source={{uri: item.imageURL}}
            style={{width: 32, height: 32}}
          />
          <Text>{item.author.userName}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          style={{width: Dimensions.get('screen').width, height: 300}}
          resizeMode="cover"
        />
      </Box>
    );
  };

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
};
