import React from 'react';

import s from './home.module.scss'
import Post from '../../Components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLastPopulatePosts, fetchPopulatePosts, fetchPosts, fetchTags, selectPostData } from '../../Slice/slices/post/postSlice';
import { Status } from '../../Slice/slices/post/types';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState, useAppDispatch } from '../../Slice/store';
import Tags from '../../Components/Tags';
import { selectSearch } from '../../Slice/slices/filter/filterSlice';
import MicroPost from '../../Components/Post/microPost';

const Home: React.FC = () => {
  const { posts, tags, latsPopulatePost } = useSelector(selectPostData);
  const isLoadingPosts = posts.status === 'loading';
  const isLoadingBar = latsPopulatePost.status === 'loading';
  const isLoadingTags = tags.status === Status.LOADING;
  const dispatch = useAppDispatch()
  const [select, setSelect] = React.useState({ name: 'Новые', sortProperty: 'news' });
  const search = useSelector(selectSearch)
  React.useEffect(() => {
    select.sortProperty === 'populate'
      ? dispatch(fetchPopulatePosts(search))
      : dispatch(fetchPosts(search))
  }, [search, select]);
  React.useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchLastPopulatePosts())
  }, []);
  console.log(latsPopulatePost?.items)


  const selectItem = (obj: any) => {
    setSelect(obj);
  }
  const list = [
    { name: 'Популярные', sortProperty: 'populate' },
    { name: 'Новые', sortProperty: 'news' },
  ]

  return <div className={s.root}>
    <div className={s.content}>
      <div className={s.select}> {list.map(obj => <span
        key={obj.name}
        className={obj.sortProperty === select.sortProperty ? s.active : ''}
        onClick={() => selectItem(obj)}
      >{obj.name}</span>)} </div>
      {isLoadingPosts ? [...new Array(6)].map((e, i) => < Post key={i} isLoading={true} />) : posts.items.map(item => < Post post={item} key={item._id} />)}
    </div>
    <div className={s.tagsContainer}>
      <h3>Популярные теги</h3>
      <hr />
      <div className={s.tags}>
        {isLoadingTags ? <Tags isLoading={isLoadingTags} /> : <Tags tags={tags.items} />}
      </div>

      <div className={s.sideBar}>
        <h4>Лучшие публикации:</h4>
        <hr />
        {isLoadingBar ? [...new Array(6)].map((e, i) => < MicroPost key={i} isLoading={true} />) : latsPopulatePost.items.map(item => < MicroPost post={item} key={item._id} />)}
      </div>

    </div>
  </div >;
};

export default Home;
