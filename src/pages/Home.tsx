import React, { FC } from 'react';
import { Chats } from '../components/Chats/Chats';
import { ChatScreens } from '../components/ChatScreens/ChatScreens';
import { Navigation } from '../components/Navigation/Navigation';
import { useAppSelector } from '../hooks/hooks';

export const Home: FC = () => {
  const { isConnected } = useAppSelector((state) => state.user);
  return (
    <main className="chat">
      <Navigation />
      <div className="chat__wrapper">
        {!isConnected && <Chats />}
        {isConnected && <ChatScreens />}
      </div>
    </main>
  );
};
