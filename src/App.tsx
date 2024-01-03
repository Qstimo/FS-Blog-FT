import React from 'react';
import './App.scss';
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from './Slice/store';
import { useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './Slice/slices/auth/authSlice';
import AppRouter from './Routs/AppRouter/AppRouter';
function App() {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate()
  React.useEffect(() => {
    dispatch(fetchAuthMe());
    const firstVisit = Boolean(window.localStorage.getItem('firstVisit'));
    if (!isAuth && !firstVisit) {
      navigate('/welcome');
      window.localStorage.setItem('firstVisit', 'visit');
    }
  }, []);


  return (
    <AppRouter />
  );
}

export default App;
