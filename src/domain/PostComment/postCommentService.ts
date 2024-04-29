import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentAPI} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;
const getList = async (
  postId: number,
  page: number,
): Promise<Page<PostComment>> => {
  const postCommentPageAPI = await postCommentAPI.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
};

const create = async (
  postId: number,
  message: string,
): Promise<PostComment> => {
  const postCommentApi = await postCommentAPI.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentApi);
};

export const postCommentService = {
  getList,
  create,
};
