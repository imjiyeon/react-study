import './App.css';
import Calc from './component/Calc';
import { Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// npm install redux react-redux
// npm install @reduxjs/toolkit

// 리덕스 -> 리덕스 툴킷

// reducer + createStore -> createSlice + configureStore

// 계산기 슬라이스 생성
const calcSlice = createSlice({
  name: 'calcSlice',
  initialState: { result: null },
  reducers: {
    '+': (state, action) => {
      state.result = action.num1 + action.num2;
    },
    '-': (state, action) => {
      state.result = action.num1 - action.num2;
    },
    '*': (state, action) => {
      state.result = action.num1 * action.num2;
    },
    '/': (state, action) => {
      state.result = action.num1 / action.num2;
    },
    '0': (state, action) => {
      state.result = null;
    }
  }
});

// function reducer(oldState, action) {

//   let newState = { ...oldState }

//   switch (action.type) {
//     case '+':
//       newState.result = action.num1 + action.num2;
//       break;
//     case '-':
//       newState.result = action.num1 - action.num2;
//       break;
//     case '*':
//       newState.result = action.num1 * action.num2;
//       break;
//     case '/':
//       newState.result = action.num1 / action.num2;
//       break;
//     case '0':
//       newState.result = null;
//       break;
//     default:
//       newState.result = null;
//   }

//   return newState;
// }

function App() {

  // 슬라이스를 모아서 스토어 생성
  const store = configureStore({
    reducer: {
      calc: calcSlice.reducer
    }
  });

  return (
    <div>
      <h3>계산기</h3>
      {/* Provider 설정 */}
      <Provider store={store}>
        <Calc></Calc>
      </Provider>
    </div>
  );
}

export default App;
