import './App.css';
// redux 패키지에서 createStore 함수 가져오기
import { createStore } from 'redux';
// react-redux 패키지에서 Provider, useSelector, useDispatch 함수 가져오기
import { Provider } from 'react-redux';
// redux와 react-redux 설치 명령: npm install redux react-redux
import { Counter } from './component/Counter';

// + 버튼을 클릭하면 숫자가 증가되도록 구현하기


// 리듀서 생성 (상태를 변경하는 함수)
function reducer(oldState, action) {
  // 기존값이 변경되지 않도록 state를 복사하고, value값을 증가
  if (action.type === 'up') {
    let newState = { ...oldState };
    newState.value = newState.value + action.step;
    return newState;
  }
  // 액션타입이 일치하지 않으면 기존의 상태값을 반환
  return oldState;
}

// 상태 초기값
const initState = { value: 0 };

// 스토어 생성
const store = createStore(reducer, initState);

function App() {
  // redux 스토어를 사용하기 위해 자식 컴포넌트들을 Provider로 감싸기
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
