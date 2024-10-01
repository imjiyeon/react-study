import logo from './logo.svg';
import './App.css';
import { createContext, useContext } from 'react';

const themeDefault = { border : '10px solid red' };
const themeContext = createContext(themeDefault);

// sub2를 포함해서 하위에 있는 모든 컴포넌트의 테두리를 green으로 변경하려면
// 각 컴포넌트를 하나씩 변경해야 한다
// 하지만 context를 사용하면 한번에 스타일을 변경할 수 있다

function App() {

  const theme = useContext(themeContext);
  console.log(theme); 

  return (
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Sub1></Sub1>
    </div>
  );
}

function Sub1(){

  const theme = useContext(themeContext);
  console.log('Sub1 theme' + JSON.stringify(theme));

  // Sub1 내부를 Provider로 감싸고, value에 새로운 스타일을 설정
  // 이렇게 하면 Provider 하위에 있는 모든 컴포넌트가 새로운 값을 전달받는다
  return (
    <themeContext.Provider value={{ border : '10px solid green' }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2></Sub2>
      </div>
    </themeContext.Provider>
  );
}

function Sub2(){

  // Sub2는 부모 중 가장 먼저 등장하는 Provider의 value값을 가지게됨
  const theme = useContext(themeContext);
  console.log('Sub2 theme' + JSON.stringify(theme));

  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}

function Sub3(){

  const theme = useContext(themeContext);
  console.log('Sub3 theme' + JSON.stringify(theme));

  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

export default App;
