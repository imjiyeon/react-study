import { createSlice } from "@reduxjs/toolkit";

// 회원 정보를 관리하는 슬라이스

// state 초기값
const initialState = {
  token: null, // 인증 토큰
  info: null // 회원 정보
};

// 슬라이스 생성 (기능별로 state를 관리)
// 인자: 슬라이스이름, 초기상태, 리듀서함수
// 리듀서란? state를 변경하는 함수들
export const memberSlice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {
    // 로그인시 생성된 토큰과 회원정보를 state에 저장
    login: (state, action) => {
      state.token = action.payload.token;
      state.info = action.payload.user;
      // 나중에 추가!
      // 로컬 스토리지에 토큰과 회원정보를 저장
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    // 로그아웃시 생성된 토큰과 회원정보를 저장
    logout: (state) => {
      state.token = null;
      state.info = null;
      // 나중에 추가!
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

// 슬라이스를 생성하면 리듀서함수에 대응하는 액션함수가 자동으로 생성됨
// 액션함수 중 login과 logout 함수를 추출하여 export
export const { login, logout } = memberSlice.actions;