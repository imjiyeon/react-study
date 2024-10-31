import React from 'react';
import { Link } from 'react-router-dom';
import movies from './movie.json';

function Movies() {

  const lis = [];

  for(let m of movies){
    lis.push(<li key={m.id}><Link to={`/movie/${m.id}`}>{m.title}</Link></li>);
  }

  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {lis}
      </ul>
    </div>
  );
}

export default Movies;
