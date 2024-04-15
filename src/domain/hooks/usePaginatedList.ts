/* eslint-disable no-console */
import {useEffect, useState} from 'react';

import {Page} from '@types';

export const usePaginatedList = <Data>(
  getList: (page: number) => Promise<Page<Data>>,
) => {
  const [list, setList] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const isPostListEmpty = list.length === 0 ? 1 : undefined;
  const [hasNextPage, setHasNextPage] = useState(true);
  const fetchInitialData = async () => {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await getList(1);
      setList(data);
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
      const {meta, data} = await getList(page);
      setList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    error,
    loading,
    isPostListEmpty,
    fetchNextPage,
    refresh: fetchInitialData,
  };
};
