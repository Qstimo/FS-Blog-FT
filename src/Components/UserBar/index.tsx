import React from 'react';
import s from './UserBar.module.scss';
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../../Img/avatar';
import Button from '../../Ui/Button';
import { useSelector } from 'react-redux';
import { logout, selectIsAuth, selectUser } from '../../Slice/slices/auth/authSlice';
import { useAppDispatch } from '../../Slice/store';
import AvatarUrl from '../AvatarUrl';


const UserBar: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const data = useSelector(selectUser)
  const dispatch = useAppDispatch();
  const logoutUser = () => {
    if (window.confirm('Уже уходите? :(')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/auth')
    }


  }
  return <>
    <div className={s.userMenu}>
      {isAuth
        ? <><Link to='/created'>  <button className={s.btn}>Создать пост</button></Link>
          <button onClick={logoutUser} className={s.btn}>Выйти</button>
          <AvatarUrl avatarUrl={data?.avatarUrl} /></>
        : <Link to='/auth'> <button className={s.btn}>Войти</button></Link>}



    </div>
  </>

};

export default UserBar;
