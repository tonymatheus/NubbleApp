/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const FavoriteScreen = (props: AppTabScreenProps<'FavoriteScreen'>) => {
  return (
    <Screen>
      <Text preset="headingLarge">Favorete</Text>
    </Screen>
  );
};
