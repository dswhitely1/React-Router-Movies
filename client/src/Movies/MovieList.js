import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function MovieList () {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
        ><MovieCard
          key={movie.id}
          movie={movie}
        /></Link>
      ))}
    </div>
  );

}

export default MovieList;
