
import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navigationbr.css';

export default function Navigationbr() {
  return (
    <div>    
    {/* Navigation Bar */}
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Home" className="nav-link">Home</Link></li>
        <li><Link to="/Careers" className="nav-link">Careers</Link></li>
        <li><Link to="/Contactus" className="nav-link">Contact Us</Link></li>	
        <li><Link to="/Aboutus" className="nav-link">About Us</Link></li>
      </ul>
    </nav>
    </div>
  )
}