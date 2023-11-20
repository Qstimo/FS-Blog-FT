import React from 'react';
import s from './UserBar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { logout, selectIsAuth, selectUser } from '../../Slice/slices/auth/authSlice';
import { useAppDispatch } from '../../Slice/store';
import AvatarUrl from '../AvatarUrl';
import { CloseSvg, ExitSvg, WriteSvg } from '../../Img/svg';

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
  const popupRef = React.useRef<HTMLDivElement>(null);
  const handleClick = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  };


  React.useEffect(() => {
    document.body.addEventListener('mousedown', handleClick);
    return () => document.body.removeEventListener('mousedown', handleClick);
  }, []);


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
            <button className={s.btn}><span>Создать пост <span><WriteSvg /></span> </span> </button>
          </Link>
          <AvatarUrl onClick={openUserBarFunc} avatarUrl={data?.avatarUrl} />
          <TransitionGroup>
            {open && (
              <CSSTransition in={open} classNames="user-bar" timeout={600}>
                <div ref={popupRef} className={s.userBar}>
                  <CloseSvg onClick={() => setOpen(false)} />
                  <div className={s.user}>
                    {' '}
                    <AvatarUrl avatarUrl={data?.avatarUrl} />
                    <span>{data?.fullName}</span>
                  </div>
                  <hr />
                  <ul>
                    <Link to={'./user'}><li>Странница профиля</li></Link>
                    <li onClick={logoutUser}><span>Выйти <ExitSvg fill={'var(--text-color-brown)'} /></span></li>
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
