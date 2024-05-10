import {postService} from '@domain';
import {usePaginatedList} from '@infra';

import {Post} from '../postTypes';

export const usePostList = () => {
  return usePaginatedList<Post>(postService.getList);
};
