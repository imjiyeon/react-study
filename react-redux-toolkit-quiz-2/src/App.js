import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './component/Todo';
import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

// npm install redux react-redux

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: { todolist: [] },
  reducers: {
    ADD: (state, action) => {
      let newId = 0;
      if (state.todolist.length !== 0) {
        newId = state.todolist.length;
      }
      state.todolist.push({ id: newId, text: action.text });
    },
    DELETE: (state, action) => {
      state.todolist = state.todolist.filter(todo => todo.id !== action.id);
    },
    RESET: (state, action) => {
      state.todolist = [];
    }
  }
});

function App() {

  // 슬라이스를 모아서 스토어 생성
  const store = configureStore({
    reducer: {
      todo: todoSlice.reducer
    }
  });

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
