// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogs/blogSlice.js'

export const store = configureStore({
  reducer: {
    blog: blogReducer
  },
});