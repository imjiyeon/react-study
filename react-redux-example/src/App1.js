import logo from './logo.svg';
import './App.css';
// react 패키지에서 useState 훅 가져오기
import {useState} from 'react';

// div를 계층 구조로 만들고, 상태를 하위 컴포넌트(Left3)에 전달하기

function App() {

  // num이라는 상태를 생성
  const [num, setNum] = useState(1);

  return (
    // Left1 컴포넌트에 props를 통해 num 상태를 전달
    <div id="container">
      <h1>Root</h1>
      <Left1 num={num} ></Left1>
    </div>
  );
}

// 똑같은 구조로 Left2 컴포넌트를 만들고 Left1에 넣기
function Left1(props){
  // props를 통해 전달받은 num 출력
  // App 함수 안에서 선언한 num값은 외부에서 직접 사용할 수 없으므로, prop를 통해 전달해야함
  return (
    <div>
      <h1>Left1 : {props.num}</h1>
      <Left2 num={props.num}></Left2>
    </div>
  );
}

function Left2(props){
  return (
    <div>
      <h1>Left2 : {props.num}</h1>
      <Left3 num={props.num}></Left3>
    </div>
  );
}

// 부모에서 계속 전달받아서 Left3에 num 상태를 출력함!
function Left3(props){
  return (
    <div>
      <h1>Left3 : {props.num}</h1>
    </div>
  );
}

export default App;
