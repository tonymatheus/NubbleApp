import {postCommentService} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {PostComment} from '../postCommentTypes';

export const usePostCommentCreate = (
  postId: number,
  options?: MutationOptions<PostComment>,
) => {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Ocorreu um erro');
      }
    },
  });

  const createComment = async (message: string) => {
    return await mutate({message});
  };

  return {
    createComment,
    isLoading,
    isError,
  };
};
