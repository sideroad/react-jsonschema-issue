import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import uris from './uris';

export default () => (
  /**
   * Please keep routes in alphabetical order
   */
  <Route path={uris.pages.root} component={App}>
    <IndexRoute component={Home} />
  </Route>
);
