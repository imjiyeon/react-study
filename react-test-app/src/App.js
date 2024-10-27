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
        <li><NavLink to='/modify'>modify</NavLink></li>
        <li><NavLink to='/detail'>detail</NavLink></li>
      </ul> 

      <Routes>
        <Route path='/list' element={<BoardList />}></Route>
        <Route path='/register' element={<BoardRegister />}></Route>
        <Route path='/modify' element={<BoardModify />}></Route>
        <Route path='/detail' element={<BoardDetail />}></Route>
      </Routes>

    </div>
  );
}

export default App;
