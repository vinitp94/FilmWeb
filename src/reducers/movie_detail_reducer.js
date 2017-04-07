import { RECEIVE_MOVIE } from '../actions/movie_detail_actions';

const MovieDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MOVIE:
      return action.movie;
    default:
      return state;
  }
};

export default MovieDetailReducer;
