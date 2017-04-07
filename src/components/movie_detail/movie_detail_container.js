import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movie_detail_actions';
import MovieDetail from './movie_detail';

const mapStateToProps = ({ movieDetail }) => ({
  movie: movieDetail
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (imdbID) => dispatch(fetchMovie(imdbID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
