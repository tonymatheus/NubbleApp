import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isError, isLoading, user, refetch, isFetching} =
    useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator color="gray1" />}
      {isError && <Text>erro ao carregar Perfil de Usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center">
            <ProfileAvatar
              imageURL={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.userName}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
