import React, { FC } from 'react';
import { BtnPropsType } from '../../../@types';
import './styles.scss';

export const Btn: FC<BtnPropsType> = ({ type, text, handler }) => {
  return (
    <button onClick={handler} className={`btn ${type}`}>
      {text}
    </button>
  );
};
