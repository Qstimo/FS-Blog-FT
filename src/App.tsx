import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';

import MainLayout from './Components/Layouts/MainLayout';
import FullPost from './Pages/FullPost';
import Register from './Pages/Register';
import PostAdd from './Pages/PostAdd';
import { useAppDispatch } from './Slice/store';
import { useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './Slice/slices/auth/authSlice';
import UserPage from './Pages/User';
import NotFound from './Pages/NotFound';
function App() {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home />}></Route>
        <Route path='posts/:id' element={<FullPost />}></Route>
        <Route path='/auth' element={<Register />}></Route>
        <Route path='/created' element={<PostAdd />}></Route>
        <Route path='/update/:id' element={<PostAdd />}></Route>
        <Route path='/user' element={<UserPage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>

      </Route>

    </Routes>


  );
}

export default App;
