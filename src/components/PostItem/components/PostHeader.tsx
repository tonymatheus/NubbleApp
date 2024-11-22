import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, ProfileAvatar} from '@components';

type Props = Pick<Post, 'author'>;

export const PostHeader = ({author}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('ProfileScreen', {userId: 1})}>
      <Box marginBottom="s24">
        <Box flexDirection="row" alignItems="center" marginBottom="s16">
          <ProfileAvatar imageURL={author.profileURL} />
          <Text preset="paragraphMedium" marginLeft="s12">
            {author.userName}
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};
