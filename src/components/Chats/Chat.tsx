import React, { FC } from 'react';
import { iUser } from '../../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setIsConnected } from '../../redux/slices/userSlice';
import { Btn } from '../../UI/Btn/Btn';
import avatar from '../../assets/img/avatar.png';

export const Chat: FC<iUser> = ({ fullName, avatarUrl }) => {
  const { isLogin } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setIsConnected(true));
  };

  return (
    <li className="chat__list-item">
      <img
        className="chat__list-avatar"
        src={avatarUrl ? avatarUrl : avatar}
        alt={fullName}
      />
      <h3 className="chat__list-name">{fullName}</h3>
      {isLogin && (
        <Btn type="primary" text="Connect" handler={onClickHandler} />
      )}
    </li>
  );
};
