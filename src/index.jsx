import React from 'react';
import ReactDOM from 'react-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import LandingPage from './components/LandingPage';
import './styles/styles.scss';

ReactDOM.render(
  <div>
    <Header />
    <LandingPage />
    <Footer />
  </div>,
  document.getElementById('root')
);
