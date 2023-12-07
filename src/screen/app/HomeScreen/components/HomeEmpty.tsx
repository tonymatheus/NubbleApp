import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}
export const HomeEmpty = ({loading, error, refetch}: Props) => {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há publicações no seu feed
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold marginBottom="s16">
          Não foi possível carregar o feed
        </Text>
        <Button title="tente novamente" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      {component}
    </Box>
  );
};
