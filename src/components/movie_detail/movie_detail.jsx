import React from 'react';

class MovieDetail extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.params.id);
  }

  render() {
    return (
      <div className='main' id='movie-detail'>
        <p>{this.props.movie.Actors}</p>
        <p>{this.props.movie.Awards}</p>
        <p>{this.props.movie.BoxOffice}</p>
        <p>{this.props.movie.Country}</p>
        <p>{this.props.movie.DVD}</p>
        <p>{this.props.movie.Director}</p>
        <p>{this.props.movie.Genre}</p>
        <p>{this.props.movie.Language}</p>
        <p>{this.props.movie.Metascore}</p>
        <p>{this.props.movie.Plot}</p>
        <p>{this.props.movie.Poster}</p>
        <p>{this.props.movie.Production}</p>
        <p>{this.props.movie.Rated}</p>
        <p>{this.props.movie.Released}</p>
        <p>{this.props.movie.Response}</p>
        <p>{this.props.movie.Runtime}</p>
        <p>{this.props.movie.Title}</p>
        <p>{this.props.movie.Type}</p>
        <p>{this.props.movie.Website}</p>
        <p>{this.props.movie.Writer}</p>
        <p>{this.props.movie.Year}</p>
        <p>{this.props.movie.imdbRating}</p>
        <p>{this.props.movie.imdbVotes}</p>
      </div>
    );
  }
}

export default MovieDetail;
