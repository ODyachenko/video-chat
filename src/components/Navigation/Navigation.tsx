import React, { FC } from 'react';
import logo from '../../assets/img/logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setIsLogin } from '../../redux/slices/userSlice';
import { Btn } from '../../UI/Btn/Btn';
import { Link } from 'react-router-dom';
import './styles.scss';

export const Navigation: FC = () => {
  const { isLogin } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setIsLogin(!isLogin));
  };

  return (
    <div className="chat__navigation navigation">
      <div className="navigation__container container">
        <img className="navigation__logo" src={logo} alt="Logo" />
        <div className="navigation__user">
          {isLogin ? (
            <Btn type="danger" text="Logout" handler={onClickHandler} />
          ) : (
            <>
              <Link to="/login">
                <Btn type="primary" text="Login" handler={onClickHandler} />
              </Link>
              <Link to="/register">
                <Btn type="secondary" text={`Sign Up`} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
