import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postID: number;
}

export const PostCommentTextMessage = ({postID}: Props) => {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postID, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
    },
  });

  return (
    <TextMessage
      onPressSend={createComment}
      placeholder="adicone um comentário"
      value={message}
      onChangeText={setMessage}
    />
  );
};
