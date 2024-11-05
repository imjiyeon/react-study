import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: { todolist: [] },
  reducers: {
    ADD: (state, action) => {
      let newId = 0;
      if (state.todolist.length !== 0) {
        newId = state.todolist[state.todolist.length - 1].id + 1;
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