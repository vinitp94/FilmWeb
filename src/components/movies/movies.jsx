import React from 'react';
import MovieItem from './movie_item';

const Movies = ({ movies }) => (
  <div id="movie-container">
    <ul id='movie-list'>
      {
        movies.map((movie) => (
          <MovieItem key={ movie.imdbID } movie={ movie } />
        ))
      }
    </ul>
  </div>
);

export default Movies;
