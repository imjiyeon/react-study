import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// npm install redux react-redux

function App() {

  const [input, setInput] = useState('');

  const todolist = useSelector((state) => state.todolist);

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
        dispatch({ type: 'ADD', text: input });
        setInput('');
      }}>추가</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
      <ul>
        {todolist.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
