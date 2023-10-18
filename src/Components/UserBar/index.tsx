import React from 'react';
import s from './UserBar.module.scss';
import { Link } from 'react-router-dom'
import Avatar from '../../Img/avatar';
import Button from '../../Ui/Button';


const UserBar: React.FC = () => {
  return <>
    <div className={s.userMenu}>
      <Link to='/auth'> <button className={s.btn}>Войти</button></Link>
      <div className={s.avatarImg} ><Avatar /></div>
    </div>
  </>

};

export default UserBar;
