/* eslint-disable no-console */
import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export const usePostList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const isPostListEmpty = postList.length === 0 ? 1 : undefined;

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      setError(true);
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    isPostListEmpty,
    refetch: fetchData,
  };
};
