import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: null,
};

export const memberSlice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.member = action.payload;
    },
    logout: (state) => {
      state.member = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

// 액션함수
export const { login, logout } = memberSlice.actions;
