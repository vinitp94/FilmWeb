import React from 'react';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    debugger
  }

  render() {
    return (
      <li id='movie-item' onClick={ this.handleClick }>
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
