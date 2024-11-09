import { configureStore } from "@reduxjs/toolkit";
import { memberSlice } from "./memberSlice";

// 전역 상태를 보관하는 저장소 만들기
const store = configureStore({
  reducer: {
    member: memberSlice.reducer,
  }
});

export default store;