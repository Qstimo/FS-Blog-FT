import React from 'react';

import s from './home.module.scss'
import Post from '../../Components/Post';

const Home: React.FC = () => {
  return <div className={s.root}>
    <div className={s.content}>
      <Post />
      <Post />
      <Post />
    </div>

  </div >;
};

export default Home;
