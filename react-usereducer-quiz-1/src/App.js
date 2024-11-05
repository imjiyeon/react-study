import './App.css';
import { useState, useReducer } from 'react';

function App() {
  
  // state: 숫자, 연산자, 식, 결과 
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState('');
  // 결과는 - + * 연산자 종류에 따라 
  // 상태를 변경하는 로직이 다르기 때문에 useReducer로 변경
  // const [result, setResult] = useState(null); 

  const inputNumber = (value) => {
    setInput(input + value);

    if (operator === null) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const inputOper = (value) => {
    setInput(input + value);
    setOperator(value);
  };

  // 리듀서 함수: 상태 변경 로직
  // 이전 state값, 액션(명령)
  const resultReducer = (oldResult, action) => {

    let tempResult = 0;

    switch (action.type) {
      case '+':
        tempResult = action.num1 + action.num2;
        break;
      case '-':
        tempResult = action.num1 - action.num2;
        break;
      case '*':
        tempResult = action.num1 * action.num2;
        break;
      case '/':
        tempResult = action.num1 / action.num2;
        break;
      case '0':
        tempResult = null;
        break;
      default:
        tempResult = null;
    }

    return tempResult;
  };

  // useReducer를 사용하여 state 생성
  // 현재 state, dispatch함수
  // dispatch: setState 대신 state를 변경하는 함수
  const [result, resultDispatch] = useReducer(resultReducer, null); //리듀서와 초기값

  const clear = () => {
    setInput('');
    resultDispatch('0'); //setState 대신 resultDispatch로 변경
    setNum1(null);
    setNum2(null);
    setOperator(null);
  };

  return (
    <div>
      <h3>계산기</h3>
      <div>
        <div><span>식:</span>{input}</div>
        <div><span>결과:</span>{result}</div>
      </div>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => inputNumber(num)}>
            {num}
          </button>
        ))}
      </div>
      <div>
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => inputOper(op)}>
            {op}
          </button>
        ))}
      </div>
      
      <button onClick={() => {
        // set 대신 dispatch 호출
        // 액션은 연산자로 사용. 두 숫자를 함께 전달
        // dispatch -> reducer
        resultDispatch({ type: operator, num1: num1, num2: num2 });
      }}>=</button>

      <button onClick={clear}>C</button>
    </div>
  );
}

export default App;
