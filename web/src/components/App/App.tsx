import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from '../Navbar';
import BGAnimation from '../BGAnimation';
import * as routes from '../../routes';
import * as pages from '../../pages';
import './style.scss';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route
        exact
        path={routes.routes.MAIN_ROUTE}
        component={pages.Main}
      />
      <Route
        exact
        path={routes.routes.NEWS_ROUTE}
        component={pages.News}
      />
      <Route
        exact
        path={routes.PROFILE_ROUTE}
        component={pages.Profile}
      />
      <Redirect to={routes.routes.MAIN_ROUTE} />
    </Switch>
    <BGAnimation />
  </div>
);

export default App;
