import React, { FC } from 'react';
import { ChatsList } from './ChatsList';
import './styles.scss';

export const Chats: FC = () => {
  return (
    <div className="chat__catalogue">
      <h2 className="chat__title">Chats</h2>
      <div className="container">
        <ChatsList />
      </div>
    </div>
  );
};
