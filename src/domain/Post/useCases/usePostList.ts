/* eslint-disable no-console */
import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export const usePostList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const isPostListEmpty = postList.length === 0 ? 1 : undefined;
  const [hasNextPage, setHasNextPage] = useState(true);
  const fetchInitialData = async () => {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      setError(true);
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(false);
      const {meta, data} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
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
