import './App.css';
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/Home';
import Movies from './component/Movies';
import MovieDetail from './component/MovieDetail';

function App() {
  // 메뉴는 App에 추가하여 고정시키기
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      {/* URL경로에 따라 웰컴, 영화목록, 영화상세 화면 표시 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
