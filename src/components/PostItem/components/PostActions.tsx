/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount' | 'id'
>;

const AuthorIdMock = 1;

interface ItemProps {
  onPress: () => void;
  text: number;
  marked?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

export const PostActions = ({
  commentCount,
  favoriteCount,
  reactionCount,
  id,
}: Props) => {
  const likePost = () => {
    console.log('liked');
  };

  const navigation = useNavigation();

  const navigateToComments = () => {
    // TODO: Implement navigate to comments
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: AuthorIdMock,
    });
  };

  const favoretePost = () => {
    //TODO: Implement favoritePost
  };

  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        marked
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
        onPress={likePost}
      />
      <Item
        marked={false}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
        onPress={navigateToComments}
      />
      <Item
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
        onPress={likePost}
      />
    </Box>
  );
};

const Item = ({icon, onPress, text, marked}: ItemProps) => {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      marginRight="s24">
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold marginLeft="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
