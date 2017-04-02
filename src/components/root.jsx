import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import SearchContainer from './search/search_container';
import Favorites from './favorites/favorites';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ SearchContainer } />
          <Route path='/favorites' component={ Favorites } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
