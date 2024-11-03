import './App.css';
import { useState, useReducer } from 'react';

function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState('');
  // const [result, setResult] = useState(null); // 결과를 useReducer로 변경

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


  // 리듀서 함수
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

  // state와 dispatch 함수 생성
  const [result, resultDispatch] = useReducer(resultReducer, null);

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
      {/* dispatch 호출 */}
      <button onClick={() => {
        resultDispatch({ type: operator, num1: num1, num2: num2 });
      }}>=</button>
      <button onClick={clear}>C</button>
    </div>
  );
}

export default App;
