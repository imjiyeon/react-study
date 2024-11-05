import { useReducer, useState } from 'react';

// 사용자 동작에 따라 todo list가 변경됨
// 추가, 삭제, 초기화

// reducer 함수 정의
// 매개변수: 이전 todolist, {type:명령, id:할일의번호, text:할일의내용}
// 리턴값: 새로운 todolist
const todoReducer = (oldState, action) => {

  switch (action.type) {
    case 'ADD':
      
      //list 복제본
      let newList = [ ...oldState ];

      // todolist가 하나도 없다면 id를 0으로 설정
      let newId = 0;
      // 하나라도 있다면 id를 마지막 번호+1로 설정
      if (oldState.length !== 0) {
        newId = oldState[oldState.length - 1].id + 1;
      }
      newList.push({ id: newId, text: action.text });
      return newList;
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

  // 입력한 내용은 useState로 생성
  const [input, setInput] = useState('');

  return (
    <div>
      <h3>To-Do List</h3>
      {/* 새 할일 입력 필드 */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할 일 입력"
      />
      {/* 추가 버튼 */}
      <button onClick={()=>{
        // 디스패치에 'ADD' 액션 전달
        todoDispatch({ type: 'ADD', text: input });
        setInput(''); // 추가가 끝났으면 입력필드 초기화
      }}>추가</button>
      {/* 초기화 버튼 */}
      <button onClick={() => todoDispatch({ type: 'RESET' })}>초기화</button>
      {/* 할일 목록 */}
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
