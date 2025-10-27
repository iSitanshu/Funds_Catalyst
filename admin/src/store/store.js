// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here (e.g., counterReducer from a slice)
import adminReducer from "../features/adminSlice"

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    
  },
});