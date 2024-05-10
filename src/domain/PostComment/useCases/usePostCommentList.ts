import {usePaginatedList} from '@infra';

import {postCommentService} from '../postCommentService';

export const usePostCommentList = (postId: number) => {
  const getList = (page: number) => {
    return postCommentService.getList(postId, page);
  };

  return usePaginatedList(getList);
};
