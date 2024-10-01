import logo from './logo.svg';
import './App.css';
// react 패키지에서 createContext, useContext 함수 가져오기
import { createContext, useContext } from 'react';

// 기본 스타일 생성
// const themeDefault = { border : '10px solid green' };
const themeDefault = { border : '10px solid red' }; // 변경

// 컨텍스트를 생성하고 themeDefault를 기본값으로 설정
const themeContext = createContext(themeDefault);

function App() {

  // useContext 함수를 사용해 현재 테마 가져오기
  const theme = useContext(themeContext);
  console.log(theme); 
  // { border : '10px solid green' } 객체가 반환됨

  // div 태그의 스타일을 현재 테마로 설정
  return (
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Sub1></Sub1>
    </div>
  );
}

function Sub1(){

  // Sub1도 같은 테마로 설정
  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2></Sub2>
    </div>
  );
}

function Sub2(){

  // Sub2도 같은 테마로 설정
  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}

function Sub3(){

  // Sub3도 같은 테마로 설정
  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

// 모든 컴포넌트가 컨텍스트를 공유하여 같은 스타일이 적용됨
// 컨텍스트를 변경하면 모든 컴포넌트의 스타일이 한번에 변경됨

export default App;
