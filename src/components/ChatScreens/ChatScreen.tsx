import React, { FC } from 'react';
import screen from '../../assets/img/user.jpg';

export const ChatScreen: FC = () => {
  return (
    <div className="chat__screens-item screen">
      <img className="screen__video" src={screen} alt="user" />
      <div className="screen__footer">
        <span className="screen__username">Adam Joseph</span>
        <button className="screen__mute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.0391 16.3928C14.2527 16.3928 16.0456 14.5999 16.0456 12.3864V6.87752C16.0456 4.66397 14.2527 2.87109 12.0391 2.87109C9.82559 2.87109 8.03271 4.66397 8.03271 6.87752V12.3864C8.03271 14.5999 9.82559 16.3928 12.0391 16.3928Z"
              stroke="white"
              strokeWidth="1.66129"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.37695 10.5334V12.2361C4.37695 16.4629 7.81247 19.8984 12.0392 19.8984C16.266 19.8984 19.7015 16.4629 19.7015 12.2361V10.5334"
              stroke="white"
              strokeWidth="1.66129"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.647 7.3082C11.5484 6.97767 12.53 6.97767 13.4314 7.3082"
              stroke="white"
              strokeWidth="1.66129"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2383 9.43162C11.7691 9.29139 12.32 9.29139 12.8509 9.43162"
              stroke="white"
              strokeWidth="1.66129"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0396 19.8984V22.9032"
              stroke="white"
              strokeWidth="1.66129"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
