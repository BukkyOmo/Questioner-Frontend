import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import LandingPage from '../components/LandingPage';
import SignUp from '../containers/Signup';
import ErrorPage from '../components/ErrorPage';
import '../styles/styles.scss';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/signup' component={SignUp} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
