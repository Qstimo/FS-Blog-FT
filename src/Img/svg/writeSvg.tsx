import React from 'react';
import s from './svg.module.scss';

export const WriteSvg: React.FC = () => {
  return (
    <div className={s.writeSvg}>
      <svg

        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(3 3)">
            {' '}
            <path d="m14 1c.8284271.82842712.8284271 2.17157288 0 3l-9.5 9.5-4 1 1-3.9436508 9.5038371-9.55252193c.7829896-.78700064 2.0312313-.82943964 2.864366-.12506788z"></path>{' '}
            <path d="m6.5 14.5h8"></path> <path d="m12.5 3.5 1 1"></path>{' '}
          </g>{' '}
        </g>
      </svg>
    </div>
  );
};
