import React from 'react';

import s from './home.module.scss'
import Post from '../../Components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchTags, selectPostData } from '../../Slice/slices/post/postSlice';
import { Status } from '../../Slice/slices/post/types';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState, useAppDispatch } from '../../Slice/store';
import Tags from '../../Components/Tags';

const Home: React.FC = () => {
  const { posts, tags } = useSelector(selectPostData);
  const isLoadingPosts = false;
  const isLoadingTags = tags.status === Status.LOADING;
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  return <div className={s.root}>
    <div className={s.content}>
      {isLoadingPosts ? < Post isLoading={true} /> : posts.items.map(item => < Post post={item} key={item._id} />)}
    </div>
    <div className={s.tagsContainer}>
      <h3>Популярные теги</h3>
      <hr />
      <div className={s.tags}>
        {isLoadingTags ? <Tags isLoading={isLoadingTags} /> : <Tags tags={tags.items} />}
      </div>

    </div>
  </div >;
};

export default Home;
