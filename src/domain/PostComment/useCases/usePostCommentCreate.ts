import {useState} from 'react';

import {PostComment, postCommentService} from '@domain';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export const usePostCommentCreate = (postId: number, options?: Options) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const createComment = async (message: string) => {
    try {
      setError(null);
      setLoading(true);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (error) {
      if (options?.onError) {
        options.onError('Erro ao criar comentário');
      }
      setError(true);
    } finally {
      setLoading(true);
    }
  };

  return {
    createComment,
    loading,
    error,
  };
};
