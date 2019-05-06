import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>

    <ul>
      <li id="logo"><NavLink to='/'>Questioner</NavLink></li>

      <li><a href="signup.html">Sign Up</a></li>

      <li><a href="login.html">Sign In</a></li>

    </ul>

  </nav>
);

export default Header;
