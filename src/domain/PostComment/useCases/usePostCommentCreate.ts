import {PostComment, postCommentService} from '@domain';
import {MutationOptions, useMutation} from '@infra';

export const usePostCommentCreate = (
  postId: number,
  options?: MutationOptions<PostComment>,
) => {
  const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );

  const createComment = async (message: string) => {
    return await mutate({message});
  };

  return {
    createComment,
    loading,
    error,
  };
};
