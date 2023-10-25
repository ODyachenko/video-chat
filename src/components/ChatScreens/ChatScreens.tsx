import React, { FC } from 'react';
import { ChatScreen } from './ChatScreen';
import { ScreensActions } from './ScreensActions';
import './styles.scss';

export const ChatScreens: FC = () => {
  return (
    <div className="chat__screens">
      <div className="container">
        <ChatScreen />
        <ChatScreen />
        <ChatScreen />
      </div>
      <ScreensActions />
    </div>
  );
};
