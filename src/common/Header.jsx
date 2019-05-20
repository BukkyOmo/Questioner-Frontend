import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>

    <ul>
      <li id='logo'>
        <NavLink to='/'>Questioner</NavLink>
      </li>

      <li>
        <NavLink to='/signup'>Sign Up</NavLink>
      </li>

      <li>
        <NavLink to='/signin'>Sign In</NavLink>
      </li>

    </ul>

  </nav>
);

export default Header;
