import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your styles here

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/order">Order Sample</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;