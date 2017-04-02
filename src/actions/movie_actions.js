import * as OMDBAPIUtil from '../util/omdb_api_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_NUM_RESULTS = 'RECEIVE_NUM_RESULTS';

export const receiveAllMovies = (movies) => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

export const receiveNumberResults = (numberResults) => ({
  type: RECEIVE_NUM_RESULTS,
  numberResults
});

export const searchMovies = (title, year, type, page) => (dispatch) => (
  OMDBAPIUtil.searchMovies(title, year, type, page)
    .then(movies => {
      let results = [];
      let numResults = 0;

      if (movies.Search) {
        results = movies.Search;
        numResults = movies.totalResults;
      }

      dispatch(receiveAllMovies(results));
      dispatch(receiveNumberResults(numResults));
    })
    .fail(err => console.log(err))
);
