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

const remove = async (postCommentId: number): Promise<string> => {
  const response = await postCommentAPI.remove(postCommentId);

  return response.message;
};

/**
 * @description user can delete a comment if is the post owner or comment author
 * @param userId the current session user id
 * @param postComment comment to be deleted
 * @param postAuthorId the id of postAuthor
 */
const isAllowToDelete = (
  postComment: PostComment,
  userId: number,
  postAuthorId: number,
): boolean => {
  if (postComment.author.id === userId) {
    return true;
  }
  if (postAuthorId === userId) {
    return true;
  }

  return false;
};

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
