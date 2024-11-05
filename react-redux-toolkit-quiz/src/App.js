import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// npm install redux react-redux
// npm install @reduxjs/toolkit


function App() {

  // 입력한 내용은 useState로 생성
  const [input, setInput] = useState('');

  const todolist = useSelector((state) => state.todo.todolist);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>To-Do List</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할 일 입력"
      />
      <button onClick={() => {
        dispatch({ type: 'todoSlice/ADD', text: input });
        setInput('');
      }}>추가</button>
      <button onClick={() => dispatch({ type: 'todoSlice/RESET' })}>초기화</button>
      <ul>
        {todolist.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'todoSlice/DELETE', id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
