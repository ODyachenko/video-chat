import React, { FC, useEffect } from 'react';
import { Chat } from './Chat';
import { useGetUsersQuery } from '../../redux/api/userApi';
import { iGetQuery, iUser } from '../../../@types';

export const ChatsList: FC = () => {
  const { data, isLoading, isError } = useGetUsersQuery<iGetQuery>('');

  return (
    <ul className="chat__list">
      {!isLoading &&
        data.map((chat: iUser) => <Chat key={chat._id} {...chat} />)}
    </ul>
  );
};
