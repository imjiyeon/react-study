import { configureStore } from "@reduxjs/toolkit";
import { memberSlice } from "./memberSlice";

// 스토어 생성
// 슬라이스별로 리듀서를 설정
// 슬라이스이름: 리듀서함수
const store = configureStore({
  reducer: {
    member: memberSlice.reducer,
  }
});

export default store;