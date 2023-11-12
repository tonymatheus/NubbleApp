/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const NewPostScreen = (props: AppTabScreenProps<'NewPostScreen'>) => {
  return (
    <Screen>
      <Text preset="headingLarge">New Post</Text>
    </Screen>
  );
};
