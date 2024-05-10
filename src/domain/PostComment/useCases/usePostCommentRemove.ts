import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';

export const usePostCommentRemove = (option?: MutationOptions<String>) => {
  return useMutation<{postCommentId: number}, string>(
    ({postCommentId}) => postCommentService.remove(postCommentId),
    option,
  );
};
