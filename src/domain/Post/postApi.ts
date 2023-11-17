import {postListMock} from './postListMock';
import {Post} from './types';

const getList = async (): Promise<Post[]> => {
  return postListMock;
};

export const postApi = {
  getList,
};
