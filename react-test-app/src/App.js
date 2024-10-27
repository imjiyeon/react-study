import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from 'react-router-dom';
import BoardList from './features/board/BoardList';
import BoardRegister from './features/board/BoardRegister';
import BoardDetail from './features/board/BoardDetail';
import BoardModify from './features/board/BoardModify';
import MemberRegister from './features/common/MemberRegister';
import Login from './features/common/Login';
import Main from './features/common/Main';
import Layout from './components/Layout';

function App() {

  // 레이아웃 설정하기.
  // Outlet을 사용하는 컴포넌트를 부모 경로에 넣고 
  // 그 아래 자식 라우트를 설정한다
  // 하위 경로를 호출하면 하위 컴포넌트가 부모 컴포넌트의 Outlet 위치에 렌더링된다
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/list' element={<BoardList />}></Route>
          <Route path='/register' element={<BoardRegister />}></Route>
          {/* url 경로에파라미터 추가 */}
          <Route path='/modify/:boardNo' element={<BoardModify />}></Route>
          <Route path='/detail/:boardNo' element={<BoardDetail />}></Route>
          <Route path='/memberregister' element={<MemberRegister />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
