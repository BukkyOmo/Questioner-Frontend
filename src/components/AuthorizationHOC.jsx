import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import tokenExpired from '../utils/tokenExpired';

const token = localStorage.getItem('token');

const AuthorizationHOC = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      if (token && !tokenExpired(token)) {
        return <Component />;
      }
      return <Redirect to='/signin' />;
    }}
  />
);

export default AuthorizationHOC;
