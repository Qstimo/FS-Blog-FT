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
import Slider from '../../Components/Slider';

const Home: React.FC = () => {
  const { posts, tags, } = useSelector(selectPostData);
  const isLoadingPosts = posts.status === Status.LOADING || posts.status === Status.ERROR;
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

  }, []);


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
      >{obj.name}</span>)}
      </div>
      {isLoadingPosts ? [...new Array(6)].map((e, i) => < Post key={i} isLoading={true} />) : posts.items?.map(item => < Post post={item} key={item._id} />)}
    </div>
    <div className={s.tagsContainer}>
      <h3>Популярные теги:</h3>
      <hr style={{ width: "100%" }} />
      <div className={s.tags}>
        {tags.status === Status.ERROR
          ? <div>Теги не найдены</div>
          : isLoadingTags ? <Tags isLoading={isLoadingTags} /> : <Tags tags={tags.items} />
        }
      </div>

      <div className={s.sideBar}>
        <Slider />
      </div>

    </div>
  </div >;
};

export default Home;
