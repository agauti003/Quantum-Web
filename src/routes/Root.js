import 'babel-polyfill';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('../containers/Home'));

const Root = ({ store }) => (
  <Provider store={store}>
    <Suspense fallback={<div />}>
      <Router basename="/">
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </Router>
    </Suspense>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root;
