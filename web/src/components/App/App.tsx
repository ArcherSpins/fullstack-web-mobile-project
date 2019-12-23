import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from '../Navbar';
import * as routes from '../../routes';
import * as pages from '../../pages';
import './style.scss';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route
        exact
        path={routes.MAIN_ROUTE}
        component={pages.Main}
      />
      <Route
        exact
        path={routes.NEWS_ROUTE}
        component={pages.News}
      />
      <Redirect to={routes.MAIN_ROUTE} />
    </Switch>
  </div>
);

export default App;
