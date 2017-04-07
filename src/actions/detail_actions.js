import * as OMDBAPIUtil from '../util/omdb_api_util';

export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie
});

export const fetchMovie = (imdbID) => (dispatch) => (
  OMDBAPIUtil.fetchMovie(imdbID)
    .then(movie => {
      dispatch(receiveMovie(movie));
    })
    .fail(err => console.log(err))
);

export const clearMovie = (dispatch) => {
  dispatch(receiveMovie({}));
};
