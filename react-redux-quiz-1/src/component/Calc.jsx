import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Calc = () => {
    
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [operator, setOperator] = useState(null);
    const [input, setInput] = useState('');

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

      const dispatch = useDispatch();
    
      const clear = () => {
        setInput('');
        dispatch({ type: '0' });
        setNum1(null);
        setNum2(null);
        setOperator(null);
      };

      const result = useSelector((state)=>state.result);
  

  return (
    <div>
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
        dispatch({ type: operator, num1: num1, num2: num2 });
      }}>=</button>

      <button onClick={clear}>C</button>
    </div>
  )
}

export default Calc