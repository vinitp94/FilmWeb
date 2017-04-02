import * as OMDBAPIUtil from '../util/omdb_api_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';

export const receiveAllMovies= (movies) => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

export const searchMovies = (title, year, type, page) => (dispatch) => (
  OMDBAPIUtil.searchMovies(title, year, type, page)
    .then(movies => {
      let results = [];
      if (movies.Search) {
        results = movies.Search;
      }

      return dispatch(receiveAllMovies(results));
    })
    .fail(err => console.log(err))
);
