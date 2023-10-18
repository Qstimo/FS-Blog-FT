import React from 'react';
import s from './header.module.scss';
import { Link } from 'react-router-dom'

import Theme from '../theme';
import UserBar from '../UserBar';

const Header: React.FC = () => {
  return <div className={s.root}>
    <div className={s.header}>

      <ul className={s.navbar}>
        <li>
          <Theme />
        </li>
        <li>
          <Link to={'/'}>Главная</Link>
        </li>
        <li>
          <Link to={'/'}>О нас</Link>
        </li>
        <li>
          Поиск
        </li>
      </ul>
      <UserBar />
    </div>

  </div>
};

export default Header;
