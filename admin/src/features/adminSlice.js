// src/features/admin/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admintoken: null,
  adminInfo: null, // new field to store existing_admin info
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    // update the token only
    updateAdminToken: (state, action) => {
      state.admintoken = action.payload;
    },
    // update the admin info
    updateAdminInfo: (state, action) => {
      state.adminInfo = action.payload;
    },
    // update both token and info together
    setAdminData: (state, action) => {
      const { token, adminInfo } = action.payload;
      state.admintoken = token;
      state.adminInfo = adminInfo;
    },
    // clear admin data (logout)
    clearAdminData: (state) => {
      state.admintoken = null;
      state.adminInfo = null;
    },
  },
});

export const { updateAdminToken, updateAdminInfo, setAdminData, clearAdminData } = adminSlice.actions;
export default adminSlice.reducer;
