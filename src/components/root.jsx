import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import SearchContainer from './search/search_container';
import MovieDetailContainer from './movie_detail/movie_detail_container';
import { clearMovies } from '../actions/search_actions';
import { clearMovie } from '../actions/movie_detail_actions';

const Root = ({ store }) => {
  const _clearMovies = () => {
    store.dispatch(clearMovies);
  };

  const _clearMovie = () => {
    store.dispatch(clearMovie);
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
          <IndexRoute component={ SearchContainer } onLeave={ _clearMovies } />
          <Route path='/movie/:id' component={ MovieDetailContainer } onLeave={ _clearMovie } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
