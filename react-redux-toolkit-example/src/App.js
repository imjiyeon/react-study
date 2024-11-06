import './App.css';
import { Provider } from 'react-redux';
// store와 counter 임포트
import store from './store';
import { Counter } from './component/Counter';

// slice와 store를 별도의 파일로 분리하기

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
