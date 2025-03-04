import {postService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

import {Post} from '../postTypes';

export const usePostList = () => {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList);
};
