import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>

    <ul>
      <li id='logo'><NavLink to='/'>Questioner</NavLink></li>

      <li><a href='/signup'>Sign Up</a></li>

      <li><a href='/login'>Sign In</a></li>

    </ul>

  </nav>
);

export default Header;
