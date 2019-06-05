import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import tokenExpired from '../utils/tokenExpired';

const AuthorizationHOC = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      const token = localStorage.getItem('token');
      if (token && !tokenExpired(token)) {
        return <Component {...rest} />;
      }
      return <Redirect to='/signin' />;
    }}
  />
);

export default AuthorizationHOC;
