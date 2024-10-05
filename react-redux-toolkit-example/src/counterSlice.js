// 새로운 파일 생성하기

// createSlice import 부분과 store 부분 코드 복사하기

import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState:{value:0},
    reducers:{
      up: (state, action) => {
        console.log(action);
        state.value = state.value + action.payload;
      }
    }
  });
  
// counterSlice 내보내기
export default counterSlice;

// 리듀서 액션 중에서 up 내보내기
export const {up} = counterSlice.actions;