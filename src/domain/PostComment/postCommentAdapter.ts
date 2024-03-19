import {PostComment, PostCommentAPI} from './postCommentTypes';

export const toPostComment = (postCommentAPI: PostCommentAPI): PostComment => {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    created_at: postCommentAPI.created_at,
    author: {
      profileURL: postCommentAPI.user.profile_url,
      name: postCommentAPI.user.full_name,
      userName: postCommentAPI.user.username,
    },
  };
};

export const postCommentAdapter = {
  toPostComment,
};
