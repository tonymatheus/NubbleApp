import React from 'react';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export const HomeHeader = () => {
  const {top} = useAppSafeArea();

  return (
    <Box style={{paddingTop: top}} {...$wrapper}>
      <Box backgroundColor="carrotSecondary" height={16} width={70} />
      <Box flexDirection="row">
        <Box marginRight="s24">
          <Icon name="search" />
        </Box>
        <Box marginRight="s24">
          <Icon name="bell" />
        </Box>
        <Box marginRight="s24">
          <Icon name="comment" />
        </Box>
      </Box>
    </Box>
  );
};

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
