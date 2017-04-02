import { RECEIVE_ALL_MOVIES, RECEIVE_NUM_RESULTS } from '../actions/movie_actions';
import { merge } from 'lodash';

const _defaultState = {
  movies: [],
  numberResults: 0
};

const SearchResultReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_MOVIES:
      return merge({}, state, { movies: action.movies });
    case RECEIVE_NUM_RESULTS:
      return merge({}, state, { numberResults: action.numberResults });
    default:
      return state;
  }
};

export default SearchResultReducer;
