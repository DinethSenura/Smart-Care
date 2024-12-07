import React from 'react';
import Mainbuttons from '../components/Mainbutt';
import '../Styles/Mainpg.css';

export default function Main() {
  return (
    <div className="Main-section">
      {/* Logo in the top-left */}
      <div className="logo-container">
        <img
          src={require('../Asset/largpng.png')}
          alt="Logo"
          className="logo-image"
        />
      </div>

      {/* Background and Main Content */}
      <div className="background-container">
        {/* Middle Section with Buttons */}
        <div className="content-center">
          <Mainbuttons />
        </div>

        {/* Bottom Left and Bottom Right Colors */}
        <div className="bottom-left-color" />
        <div className="bottom-right-color" />

        {/* Images at the bottom */}
        <div className="images-container">
          <img
            src={require('../Asset/world.png')}
            alt="World Map"
            className="world-image"
          />
          <img
            src={require('../Asset/mainpg.png')}
            alt="Main Illustration"
            className="mainpg-image"            
          />
        </div>
      </div>
    </div>
  );
}

