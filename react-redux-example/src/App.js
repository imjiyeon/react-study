import './App.css';
import {useState} from 'react';
// redux 패키지에서 createStore 함수 가져오기
import {createStore} from 'redux'; // createStore가 오래된 방식이여서 권장하지 않는다는 의미. 여기서는 무시
// react-redux 패키지에서 Provider, useSelector, useDispatch 함수 가져오기
// Provider: 컴포넌트에게 스토어를 전달하는 역할
// useSelector: 컴포넌트에서 스토어를 조회하는 함수
// useDispatch: 상태를 변경하는 함수
import {Provider, useSelector, useDispatch} from 'react-redux';

// 이전예제에서 prop로 처리한 부분 모두 잘라내고
// 리덕스를 통해 상태를 관리한다

// redux란? 상태를 중앙에서 관리하고 컴포넌트들이 상태를 공유할 수 있도록 도와주는 도구
// react-redux란? 리액트와 리덕스를 연결하는 도구
// redux와 react-redux는 별도의 패키지라서 설치 필요
// 설치 명령: npm install redux react-redux

// 리듀서: 스토어의 상태를 어떻게 변경할지 결정하는 함수
// 파라미터: 현재 상태와 액션
// 스토어: 어플리케이션의 모든 상태
function reducer(currentState, action){
  // 초기상태
  if(currentState === undefined){
    return { num : 1 };
  }
  // 새로운 상태를 생성할 때는 복사하여 객체를 생성
  // 이전 상태값을 그대로 유지해야함
  const newState = {...currentState};

  // 액션 타입이 PLUS라면 num값을 증가시키기
  if(action.type === 'PLUS'){
    newState.num++;
  }

  return newState; // 새로운 상태 반환
}
// 이제 +버튼을 클릭하면 상태가 변경되고, 
// state를 사용하는 left3 컴포넌트도 다시 렌더링되어 새로운 num가 표시됨

// 스토어를 생성하고 리듀서를 등록
const store = createStore(reducer);

function App() {

  // 더이상 상태를 useState로 관리하지 않기 때문에 삭제
  // const [num, setNum] = useState(1);

  return (
    // Left1와 Right1 컴포넌트를 Provider로 감싸기
    // Provider 안에 있는 컴포넌트들은 스토어를 사용할 수 있음
    <div id="container">
      <h1>Root</h1>
      <div id='grid'>
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props){
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props){
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

// Left3에 num 값 표시하기
function Left3(props){

  console.log('3');
  
  // useSelector: 스토어의 상태를 조회하는 함수
  // useSelector는 함수를 인자로 받음
  // 매개변수로 상태를 받아서 어떤 값을 사용할지 결정
  // 스토어의 상태 중에서 num을 선택하여 반환
  const num = useSelector(state => state.num);

  return (
    <div>
      <h1>Left3 : {num}</h1>
    </div>
  );
}

function Right1(props){
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props){
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

// + 버튼을 누르면 num 상태가 변경되도록 처리
function Right3(props){

  // 디스패치 가져오기
  const dispatch = useDispatch();
  
  // + 버튼을 누르면 디스패치로 type값으로 액션을 전달
  // 디스패처를 사용하면 리듀서 함수에 액션이 전달됨
  return (
    <div>
      <h1>Right3</h1>
      <input 
      type='button' 
      value='+' 
      onClick={()=>{
        dispatch({ type : 'PLUS'});
      }}>
      </input>
    </div>
  );
}

export default App;
