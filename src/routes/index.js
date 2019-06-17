import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import LandingPage from '../components/LandingPage';
import SignUpFormComponent from '../components/SignUpForm';
import SignInFormComponent from '../components/SignInForm';
import AdminPage from '../components/Admin';
import CreateMeetupComponent from '../components/AdminCreate';
import AllMeetupsComponent from '../components/AllMeetups';
import SingleMeetupComponent from '../components/SingleMeetup';
import SingleQuestionComponent from '../components/SingleQuestion';
import AuthorizationHOC from '../components/AuthorizationHOC';
import ErrorPage from '../utils/ErrorPage';
import '../styles/styles.scss';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/signup' component={SignUpFormComponent} />
        <Route path='/signin' component={SignInFormComponent} />
        <AuthorizationHOC path='/meetups' exact component={AllMeetupsComponent} />
        <AuthorizationHOC path='/meetups/:id' component={SingleMeetupComponent} />
        <AuthorizationHOC path='/questions/:id' component={SingleQuestionComponent} />
        <AuthorizationHOC path='/admin' component={AdminPage} />
        <AuthorizationHOC path='/admin-create' component={CreateMeetupComponent} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routes;
