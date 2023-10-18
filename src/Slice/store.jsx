import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Components/theme/slice';
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export default store;
