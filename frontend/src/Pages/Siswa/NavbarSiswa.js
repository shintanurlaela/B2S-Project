// NavbarSiswa.js
import React from "react";
import { Link } from "react-router-dom";

const NavbarSiswa = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <h3 className="logo">ByteBook</h3>

      <ul className="nav-links">
        <li><Link to="/homesiswa">Home</Link></li>
        <li><Link to="/aboutsiswa">About</Link></li>
        <li><Link to="/booksiswa">Book</Link></li> 
        <li><button onClick={onLogout} className="logout-button">Logout</button></li> 
      </ul>
    </nav>
  );
};

export default NavbarSiswa;
