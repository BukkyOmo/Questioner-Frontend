import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import LandingPage from '../components/LandingPage';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import ErrorPage from '../components/ErrorPage';
import '../styles/styles.scss';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/signin' component={SignInForm} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
