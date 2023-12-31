import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Components/theme/slice';
import posts from './slices/post/postSlice';
import auth from './slices/auth/authSlice'
import filter from './slices/filter/filterSlice'
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts,
    auth,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch=()=>useDispatch<AppDispatch>();
export default store;
