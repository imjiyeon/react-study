import './App.css';
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/Home';
import Movies from './component/Movies';
import MovieDetail from './component/MovieDetail';

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movie/list">Movies</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/list" element={<Movies />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
