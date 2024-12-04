import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import Layout from './components/Layout';
import BoardList from './features/BoardList';
import BoardRegister from './features/BoardRegister';
import Register from './features/Register';
import BoardModify from './features/BoardModify';
import BoardDetail from './features/BoardDetail';
import Login from './features/Login';

// npm install react-router-dom

// 레이아웃 설정하기.
// Outlet을 사용하는 컴포넌트를 부모 경로에 넣고 
// 그 아래 자식 라우트를 설정한다
// 하위 경로를 호출하면 하위 컴포넌트가 부모 컴포넌트의 Outlet 위치에 렌더링된다

    // 중첩 라우트: 경로에 따라 부모와 자식 컴포넌트가 함께 렌더링 되는 구조
    // 부모: Layout 컴포넌트
    // 자식: Home, Register, Login...

    // 예: /login => Layout 컴포넌트 + Login 컴포넌트
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/board/list' element={<BoardList></BoardList>}></Route>
          <Route path='/board/register' element={<BoardRegister></BoardRegister>}></Route>
          <Route path='/board/read/:no' element={<BoardDetail></BoardDetail>}></Route>
          <Route path='/board/modify/:no' element={<BoardModify></BoardModify>}></Route>
        </Route>
      </Routes >
    </>
  );
}

export default App;
