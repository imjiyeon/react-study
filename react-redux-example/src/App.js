import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Left1 } from './components/Left';
import { Right1 } from './components/Right';

// redux란? state를 앱 전역에서 관리하여 컴포넌트들이 상태를 공유할 수 있도록 해주는 도구
// react-redux란? 리액트와 리덕스를 연결하는 도구
// 설치 명령: npm install redux react-redux

// 리덕스 도구들
// Provider: 컴포넌트에게 스토어를 전달하는 역할
// useSelector: 컴포넌트에서 스토어를 조회하는 함수
// useDispatch: 상태를 변경하는 함수

// 리듀서 함수: 상태 변경 로직 정의
// 리턴값: 새로운 state
function reducer(currentState, action){

  // state 초기 상태 설정

  // 한번도 정의된 적이 없다면 num을 1로 초기화
  if(currentState === undefined){
    return { num : 1 }; // state가 추가될수도 있으므로 object로 관리
  }

  // state 복제본 생성
  // 이전 state를 유지하기 위해서 (불변성)
  const newState = {...currentState};

  // 명령이 PLUS라면 num값을 1 증가
  if(action.type === 'PLUS'){
    newState.num++;
  }

  // 새로운 state 반환
  return newState; 
}

// redux 스토어 생성
// 스토어는 앱에서 컴포넌트간에 state를 공유하기 위해 사용함
// state 관리의 변화: useState -> useReducer -> createStore
const store = createStore(reducer); //리듀서함수 입력

function App() {

  return (
    <div id="container">
      <h1>Root</h1>
       {/* Left와 Right를 묶고, CSS로 나란히 배치 */}
      <div id='grid'>
        {/* store를 사용하기 위해 Provider로 하위 컴포넌트들을 감싸기 */}
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;
