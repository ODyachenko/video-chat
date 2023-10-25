import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setIsConnected } from '../../redux/slices/userSlice';
import { Btn } from '../../UI/Btn/Btn';

export const ScreensActions: FC = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setIsConnected(false));
  };

  return (
    <div className="chat__screens-actions actions">
      <Btn type="danger" text="End Call" handler={onClickHandler} />
    </div>
  );
};
