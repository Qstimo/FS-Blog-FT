import React from 'react';
import { useSelector } from 'react-redux';
import { fetchAuthMe, logout, selectStatusUser, selectUser } from '../../Slice/slices/auth/authSlice';
import s from './user.module.scss';
import Avatar from '../../Img/avatar';
import { CloseSvg, ExitSvg, Loading, RemoveSvg, UpdateSvg } from '../../Img/svg';
import { useAppDispatch } from '../../Slice/store';
import { useNavigate } from 'react-router-dom';
import axios, { API_URL } from '../../Utils/axios'
import Post from '../../Components/Post';
import { TFetchPosts, TPosts } from '../../Slice/slices/post/types';
import Registration from '../../Components/Register';
import { TransitionGroup, CSSTransition } from 'react-transition-group';




const UserPage: React.FC = () => {
  const data = useSelector(selectUser)
  const [posts, setPosts] = React.useState<TFetchPosts[]>();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [switchUser, setSwitchUser] = React.useState(false);
  const status = useSelector(selectStatusUser);
  const isLoading = status === 'loading'
  React.useEffect(() => {
    data && axios
      .get(`/posts/user/${data?._id}`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, [data]);
  React.useEffect(() => {
    dispatch(fetchAuthMe())
    setModalOpen(false)
  }, [switchUser]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    if (window.confirm('Уже уходите? :(')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/auth');
    }
  };

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={s.root}>

      <div className="">
        <div className={s.userInfo}>
          <div className={s.avatar}>
            {data ? (
              <img src={`${API_URL}${data?.avatarUrl}`} alt="" className="" />
            ) : (
              <Avatar />
            )}
          </div>
          <p className={s.userName}>{data?.fullName}</p>
        </div>
        <div onClick={() => setModalOpen(true)} className={s.update}>
          {' '}
          <span >Редактировать профиль </span>
          <UpdateSvg id={''} />
        </div>
        <TransitionGroup>
          {modalOpen &&
            <CSSTransition classNames="user-update" timeout={300}>
              <div className={s.modal__container}>
                <div className={s.modal__box}>
                  <CloseSvg onClick={() => setModalOpen(false)} />
                  <Registration setSwitchUser={setSwitchUser} switchUser={switchUser} data={data} edit={true} />
                </div>
              </div>
            </CSSTransition>
          }
        </TransitionGroup>
        <span onClick={logoutUser} className={s.exit}>
          Выйти <ExitSvg fill={'var(--text-color)'} />
        </span>
      </div>
      <div className={s.userPosts}>
        <h3>Мои посты:</h3>
        <hr />
        <div className={s.postsCard}>
          {!posts && <h4>Посты не найдены (</h4>}
          {isLoading ? [...new Array(6)].map((e, i) => < Post key={i} isLoading={true} />) : posts?.map(item => < Post post={item} key={item._id} />)}

        </div>
      </div>
    </div>
  );
};

export default UserPage;
