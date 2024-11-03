import './App.css';
// react 패키지에서 createContext, useContext 함수 가져오기
import { createContext, useContext } from 'react';

// 공통 테마 생성
const themeDefault = { border: '10px solid green' };

/* 마지막에 색 변경 -> 모든 컴포넌트의 스타일이 한번에 변경됨 */
// const themeDefault = { border: '10px solid red' };

// 컨텍스트 생성
const themeContext = createContext(themeDefault); //기본값

function App() {

  // useContext 함수를 사용해 현재 테마 가져오기
  const theme = useContext(themeContext);
  console.log(theme); // { border : '10px solid green' }

  // div 태그의 스타일을 현재 테마로 설정
  return (
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Sub1></Sub1>
    </div>
  );
}

// Sub1도 같은 테마로 설정
function Sub1() {

  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2></Sub2>
    </div>
  );
}

// Sub2도 같은 테마로 설정
function Sub2() {

  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}


// Sub3도 같은 테마로 설정
function Sub3() {

  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}
// 모든 컴포넌트가 같은 스타일이됨

export default App;
