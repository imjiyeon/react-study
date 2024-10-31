import React from 'react';
import { useParams } from 'react-router-dom';
import movies from './movie.json';

function MovieDetail() {

  let params = useParams();
  
  let movieId = params.movieId;

  // 배열의 find 함수로 해당 id와 일치하는 영화 데이터 찾기
  const movie = movies.find(m => m.id === parseInt(movieId));

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.poster}></img>
    </div>
  );
}

export default MovieDetail;
