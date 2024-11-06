import './App.css';
import { Provider } from 'react-redux';
// redux toolkit 에서 configureStore, createSlice 함수 가져오기
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Counter } from './component/Counter';

// 리덕스 툴킷 설치 명령: @reduxjs/toolkit

// redux toolkit이란? redux + 부가기능 추가
// 1.스토어를 슬라이스 단위로 나눌 수 있음. 이를 통해 기능별로 스토어를 구분할 수 있음
// 2.상태의 불변성을 관리할 필요가 없음

// 리덕스 -> 리덕스 툴킷으로 변경!
// reducer + createStore => createSlice + configureStore

// 1. 카운터 슬라이스(작은 스토어) 생성하기

// 슬라이스: 기능별로 사용하는 작은 스토어 단위
// 슬라이스 이름, 상태 초기값, 리듀서 설정

const counterSlice = createSlice({
  name: 'counterSlice', //슬라이스 이름
  initialState: { value: 0 }, //상태 초기값
  reducers: { //리듀서함수
    up: (state, action) => { //타입별로 리듀서 함수 정의
      // 이전 코드는 조건문을 사용함. if(action.type==='up')
      // 이제는 'up' 액션타입만 쓰면됨
      // 이전 코드는 state를 복제하고, 변경된 state를 반환했음
      // 이제는 state를 바로 바꾸면 됨
      state.value = state.value + action.step;
    }

  }
});

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
    counter: counterSlice.reducer
  }
});

// Provider를 앱에 설정
function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
