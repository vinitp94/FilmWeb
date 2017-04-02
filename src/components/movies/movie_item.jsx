import React from 'react';

const MovieItem = ({ movie }) => (
  <li id='movie-item'>
    { movie.Title }
  </li>
);

export default MovieItem;
