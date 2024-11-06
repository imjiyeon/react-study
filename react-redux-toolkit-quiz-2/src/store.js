import { createStore } from "redux";

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

const init = { todolist: [] }

// 리듀서함수, 초기값
export const store = createStore(reducer, init);