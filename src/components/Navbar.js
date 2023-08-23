import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import profile from '../assets/profile.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="firstContainer">
      <h1>BookStore</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </div>
    <div className="oval">
      <img className="profile" src={profile} alt="" />
    </div>
  </nav>
);

export default Navbar;
