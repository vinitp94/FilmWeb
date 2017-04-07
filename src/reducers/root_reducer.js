import { combineReducers } from 'redux';
import SearchResultReducer from './search_result_reducer';
import MovieDetailReducer from './movie_detail_reducer';

const RootReducer = combineReducers({
  searchResults: SearchResultReducer,
  movieDetail: MovieDetailReducer
});

export default RootReducer;
