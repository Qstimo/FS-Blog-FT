import React from 'react';
import s from './UserBar.module.scss';
import { Link } from 'react-router-dom'
import Avatar from '../../Img/avatar';
import Button from '../../Ui/Button';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../Slice/slices/auth/authSlice';


const UserBar: React.FC = () => {
  const isAuth = useSelector(selectIsAuth)
  return <>
    <div className={s.userMenu}>
      {isAuth
        ? <><Link to='/created'>  <button className={s.btn}>Создать пост</button></Link>
          <button className={s.btn}>Выйти</button>
          <div className={s.avatarImg} ><Avatar /></div></>
        : <Link to='/auth'> <button className={s.btn}>Войти</button></Link>}



    </div>
  </>

};

export default UserBar;
