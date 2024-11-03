import { useReducer, useState } from 'react';

// reducer 함수 정의
const todoReducer = (oldState, action) => {
  switch (action.type) {
    case 'ADD':
      let newId = 0;
      if (oldState.length !== 0) {
        newId = oldState[oldState.length - 1].id + 1;
      }
      return [...oldState, { id: newId, text: action.text }];
    case 'DELETE':
      return oldState.filter(todo => todo.id !== action.id);
    case 'RESET':
      return [];
    default:
      return oldState;
  }
};

function App() {
  // todo list를 useReducer로 생성
  const [todo, todoDispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  // 할 일 추가
  const addTodo = () => {
    todoDispatch({ type: 'ADD', text: input });
    setInput(''); //초기화
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할 일 입력"
      />
      <button onClick={addTodo}>추가</button>
      <button onClick={() => todoDispatch({ type: 'RESET' })}>초기화</button>
      <ul>
        {todo.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => todoDispatch({ type: 'DELETE', id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
