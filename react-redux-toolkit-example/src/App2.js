import './App.css';
import { Provider } from 'react-redux';
// redux toolkit 에서 configureStore, createSlice 함수 가져오기
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Counter } from './component/Counter';

// 리덕스 툴킷 설치 명령: @reduxjs/toolkit

// redux toolkit이란? redux + 부가기능
// 1.스토어를 기능별로 나눌 수 있음
// 2.상태의 불변성을 관리할 필요가 없음

// 리덕스 -> 리덕스 툴킷으로 변경!
// reducer + createStore => createSlice + configureStore

// 1. 카운터 슬라이스(작은 스토어) 생성

// 슬라이스: 기능별로 사용하는 작은 스토어 단위
// 인자: 슬라이스 이름, 상태 초기값, 리듀서
// key값은 고정!
const counterSlice = createSlice({
  name: 'counterSlice', //슬라이스 이름
  initialState: { value: 0 }, //상태 초기값
  reducers: { //리듀서함수
    up: (state, action) => { //타입별로 리듀서 함수 정의
      state.value = state.value + action.step;
    }

  }
});

// 리듀서의 변화
// 1. 이전코드는 if(action.type==='up') 조건문을 사용했으나 
//    슬라이스는 'up'액션타입만 쓰면됨
// 2. 이전코드는 state를 복제하고 변경된 state를 반환했지만
//    슬라이스는 state를 그대로 사용하면됨

// 필요 없는 코드 제거 (리듀서함수와 스토어)
// function reducer(state, action){
//   if(action.type==='up'){
//     return {...state, value: state.value + action.step};
//   }
//   return state;
// }
// const initState = {value:0};
// const store = createStore(reducer, initState);

// 2. configureStore: 여러 슬라이스를 모아서 스토어 생성
// 리듀서 속서에 각 슬라이스의 이름과 리듀서 넣기
const store = configureStore({
  reducer: {
    // 슬라이스 이름: 리듀서함수
    counter: counterSlice.reducer
  }
});

function App() {
  return (
    // Provider로 앱에 스토어 주입
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
