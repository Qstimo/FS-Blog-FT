import React from 'react';
import s from './UserBar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { logout, selectIsAuth, selectUser } from '../../Slice/slices/auth/authSlice';
import { useAppDispatch } from '../../Slice/store';
import AvatarUrl from '../AvatarUrl';

const UserBar: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const data = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const logoutUser = () => {
    if (window.confirm('Уже уходите? :(')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/auth');
    }
  };
  const [auth, setAuth] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setAuth(isAuth);
  }, [isAuth]);

  const openUserBarFunc = () => {
    setOpen(true);
  };

  const closeUserBar = () => {
    setOpen(false);
  }

  return (
    <div className={s.userMenu}>
      {auth ? (
        <>
          <Link to="/created">
            {' '}
            <button className={s.btn}>Создать пост</button>
          </Link>
          <AvatarUrl onClick={openUserBarFunc} avatarUrl={data?.avatarUrl} />
          <TransitionGroup>
            {open && (
              <CSSTransition in={open} classNames="user-bar" timeout={300}>
                <div className={s.userBar}>
                  <div onClick={closeUserBar} className={s.closeSvg}>
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
                  <span className={s.user}>
                    {' '}
                    <AvatarUrl avatarUrl={data?.avatarUrl} />
                    {data?.fullName}
                  </span>
                  <hr />
                  <ul>
                    <Link to={'./user'}><li>Странница профиля</li></Link>
                    <li>Мои посты</li>
                    <li onClick={logoutUser}>Выйти</li>
                  </ul>
                </div>
              </CSSTransition>
            )}</TransitionGroup>
        </>
      ) : (
        <Link to="/auth">
          {' '}
          <button className={s.btn}>Войти</button>
        </Link>
      )}
    </div>
  );
};

export default UserBar;
