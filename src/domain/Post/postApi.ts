import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

const getList = async (): Promise<PageAPI<PostAPI>> => {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer NA.F6zvhk1eVTIgXIp1K0IjuiFqaqnuruDdcMKUz_kxb3SpB19Yp3E1eCmc9l2b',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
};

export const postApi = {
  getList,
};
