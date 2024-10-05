import './App.css';
import {Provider, useSelector, useDispatch} from 'react-redux';
// store와 up 임포트
import store from './store';
import { up } from './counterSlice';

// counterSlice와 store를 별도의 파일로 분리하기

function Counter(){

  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value
  });

  return (
    // dispatch에서 함수를 간단히 변경
    <div>
      <button onClick={()=>{
        dispatch(up(2));
      }} >+</button> {count}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
    <div>
      <Counter></Counter>
    </div>
    </Provider>
  );
}

export default App;
