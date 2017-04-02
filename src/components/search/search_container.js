import { connect } from 'react-redux';
import { searchMovies } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = ({ searchResults }) => ({
  movies: searchResults.movies,
  numberResults: searchResults.numberResults
});

const mapDispatchToProps = (dispatch) => ({
  searchMovies: (title, year, type, page) => dispatch(searchMovies(title, year, type, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
