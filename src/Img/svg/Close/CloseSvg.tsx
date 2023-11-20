import React from 'react';
import s from './close.module.scss';

export const CloseSvg: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={s.closeSvg}>
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g clip-path="url(#clip0_429_11210)">
            {' '}
            <path
              d="M21 11.9999C21 16.9705 16.9706 20.9999 12 20.9999C7.02944 20.9999 3 16.9705 3 11.9999C3 7.02938 7.02944 2.99994 12 2.99994"

              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{' '}
            <path
              d="M19 5.00006L16 8.00006"

              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{' '}
            <path
              d="M15.9999 5.00005L19 7.99991"

              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{' '}
          </g>{' '}
          <defs>
            {' '}
            <clipPath id="clip0_429_11210">
              {' '}
              <rect width="24" height="24" fill="white"></rect>{' '}
            </clipPath>{' '}
          </defs>{' '}
        </g>
      </svg>
    </div>
  );
};
