import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoList/todoSlice';
import imageReducer from './ImageSearch/imageSlice';
import colorReducer from './RandomColor/colorSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    image: imageReducer,
    color: colorReducer,
  },
});

export default store;  // Sử dụng export default
