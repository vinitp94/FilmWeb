import { RECEIVE_ALL_MOVIES } from '../actions/movie_actions';

const MovieReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.movies;
    default:
      return state;
  }
};

export default MovieReducer;
