import React from 'react';
import { Link } from 'react-router';

const MovieItem = ({ movie }) => (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className='left-movie-item'>
        { movie.Title }
      </div>
      <div className='right-movie-item'>
        { movie.Year }
      </div>
    </Link>
);

export default MovieItem;
