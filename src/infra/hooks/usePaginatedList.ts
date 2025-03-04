import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  isPostListEmpty: number | undefined;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const usePaginatedList = <Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): UsePaginatedListResult<Data> => {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : null,
  });

  const isPostListEmpty = list.length === 0 ? 1 : undefined;

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    isPostListEmpty,
    fetchNextPage: query.fetchNextPage,
    refresh: query.refetch,
    hasNextPage: !!query.hasNextPage,
  };
};
