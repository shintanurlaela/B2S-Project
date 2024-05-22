import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <h3 className="logo">ByteBook</h3>

      <ul className="nav-links">
        <li><Link to="/homeadmin">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/book">Book</Link></li> 
        <li><Link to="/user">User</Link></li> 
        <li><button onClick={onLogout} className="logout-button">Logout</button></li> 
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
