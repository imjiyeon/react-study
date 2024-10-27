import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from 'react-router-dom';
import BoardList from './features/board/BoardList';
import BoardRegister from './features/board/BoardRegister';
import BoardDetail from './features/board/BoardDetail';
import BoardModify from './features/board/BoardModify';



function App() {

  return (
    <div>
      <ul>
        <li><NavLink to='/list'>list</NavLink></li>
        <li><NavLink to='/register'>register</NavLink></li>
      </ul> 

      {/* 상세조회는 url 경로에파라미터 추가 */}
      <Routes>
        <Route path='/list' element={<BoardList />}></Route>
        <Route path='/register' element={<BoardRegister />}></Route>
        <Route path='/modify/:boardNo' element={<BoardModify />}></Route>
        <Route path='/detail/:boardNo' element={<BoardDetail />}></Route>
      </Routes>

    </div>
  );
}

export default App;
