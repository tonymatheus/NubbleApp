import {PageAPI, api} from '@api';

import {PostAPI} from './postTypes';

const getList = async (): Promise<PageAPI<PostAPI>> => {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const response = await api.get<PageAPI<PostAPI>>('user/post');

  return response.data;
};

export const postApi = {
  getList,
};
