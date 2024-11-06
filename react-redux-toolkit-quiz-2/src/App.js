import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './component/Todo';

// npm install redux react-redux

function reducer(oldState, action) {

  let newState = { ...oldState };
  let list = newState.todolist;

  switch (action.type) {
    case 'ADD':
      let newId = 0;
      if (list.length !== 0) {
        newId = list[list.length - 1].id + 1;
      }
      list.push({ id: newId, text: action.text });
      return newState;
    case 'DELETE':
      newState.todolist = list.filter(todo => todo.id !== action.id);
      return newState;
    case 'RESET':
      newState.todolist = [];
      return newState;
    default:
      return oldState;
  }

}

function App() {

  const init = { todolist: [] }

  // 리듀서함수, 초기값
  const store = createStore(reducer, init);

  return (
    <div>
      <h3>To-Do List</h3>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
