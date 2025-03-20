import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthSignIn() {
  const mutation = useMutation({
    mutationFn: authService.signOut,
    retry: false,
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
}
