import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { searchMovies } from './util/omdb_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  let root = document.getElementById('root');

  window.store = store;
  window.searchMovies = searchMovies;

  ReactDOM.render(<Root store={ store }/>, root);
});
