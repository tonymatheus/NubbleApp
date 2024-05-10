export interface PostComment {
  id: number;
  message: string;
  created_at: string; //'2023-07-24T20:38:56.192+10:00'
  createdAtRelative: string; // '1 h 2 sem'
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number;
  message: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    first_name: number;
    last_name: number;
    username: string;
    email: string;
    profile_url: string;
    is_online: boolean;
    full_name: string;
  };
  meta: any;
}
