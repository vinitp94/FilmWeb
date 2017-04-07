import React from 'react';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li id='movie-item'>
        <div className='left-movie-item'>
          { this.props.movie.Title }
        </div>
        <div className='right-movie-item'>
          { this.props.movie.Year }
        </div>
      </li>
    );
  }
}

export default MovieItem;
