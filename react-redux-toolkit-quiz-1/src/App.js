import './App.css';
import { createStore } from "redux";
import Calc from './component/Calc';
import { Provider } from 'react-redux';

// npm install redux react-redux
// npm install @reduxjs/toolkit

function reducer(oldState, action) {

  let newState = { ...oldState }

  switch (action.type) {
    case '+':
      newState.result = action.num1 + action.num2;
      break;
    case '-':
      newState.result = action.num1 - action.num2;
      break;
    case '*':
      newState.result = action.num1 * action.num2;
      break;
    case '/':
      newState.result = action.num1 / action.num2;
      break;
    case '0':
      newState.result = null;
      break;
    default:
      newState.result = null;
  }

  return newState;
}

function App() {

  const init = { result: null }

  const store = createStore(reducer, init);

  return (
    <div>
      <h3>계산기</h3>
      <Provider store={store}>
        <Calc></Calc>
      </Provider>
    </div>
  );
}

export default App;
