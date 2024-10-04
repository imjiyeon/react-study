import './App.css';
import {useState} from 'react';

// Left 컴포넌트 오른쪽에 Right 컴포넌트 추가한다
// Right3에 있는 버튼을 클릭하면 num값이 변경된다

function App() {

  const [num, setNum] = useState(1);

  return (
    <div id="container">
      {/* 루트에도 num 값을 표시 */}
      <h1>Root : {num}</h1>
      {/* Left 컴포넌트와 Right 컴포넌트를 하나로 묶고, CSS로 나란히 배치 */}
      <div id='grid'>
        <Left1 num={num} ></Left1>
        {/* 최상위 Root에 있는 Right1에서 onIncrease 함수를 prop로 전달 */}
        <Right1
        onIncrease={()=>{
          setNum(num+1); // num의 값을 증가
        }}>
        </Right1>
      </div>
    </div>
  );
}
// 이제 +버튼을 누르면 Right3 > Right2 > Right1 > Root로 이벤트가 전달되어
// num의 값이 변경된다

function Left1(props){
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

function Left3(props){
  return (
    <div>
      <h1>Left3 : {props.num}</h1>
    </div>
  );
}

// Right 컴포넌트를 생성하고 App에 추가
function Right1(props){
  return (
    <div>
      <h1>Right1</h1>
      <Right2
      onIncrease={()=>{ // 자식 컴포넌트로 onIncrease 함수를 전달
        props.onIncrease(); // 부모에서 전달받은 함수를 호출
      }}>
      </Right2>
    </div>
  );
}

// 같은 구조로 Right2 컴포넌트를 생성하고 Right1에 추가
function Right2(props){
  return (
    <div>
      <h1>Right2</h1>
      <Right3
      onIncrease={()=>{  // 자식 컴포넌트로 onIncrease 함수를 전달
        props.onIncrease(); // 부모에서 전달받은 함수를 호출
      }}>
      </Right3>
    </div>
  );
}

// + 버튼을 클릭하면 num값을 변경되도록 이벤트 처리
// onIncrease 함수를 호출하여 num의 값을 증가 시키기
// onIncrease 함수를 호출하려면 onIncrease함수를 연속적으로 호출해야함
function Right3(props){
  return (
    <div>
      <h1>Right3</h1>
      <input 
      type='button' 
      value='+' 
      onClick={()=>{
        props.onIncrease();
      }}>
      </input>
    </div>
  );
}

export default App;
