/* eslint-disable no-console */
import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export const usePostList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const isPostListEmpty = postList.length === 0 ? 1 : undefined;

  const fetchInitialData = async () => {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(1);
      setPostList(list);
      setPage(2);
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      setError(true);
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (loading) {
      return;
    }

    try {
      setLoading(false);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    isPostListEmpty,
    fetchNextPage,
    refresh: fetchInitialData,
  };
};
