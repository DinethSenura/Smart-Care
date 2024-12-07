import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Toptwobutt from '../components/Toptwobuttons';
import Navigationbr from '../components/Navigationbr';
import '../Styles/Home.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading or resource fetching
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="home-section">
          <Toptwobutt />
          <Navigationbr />
          {/* Square Buttons */}
          <div className="button-vertical-container">
            <button
              className="square-button"
              onClick={() => alert('Button 1 clicked!')}
            >
              Wound Alysis
            </button>
            <button
              className="square-button"
              onClick={() => alert('Button 2 clicked!')}
            >
              Emergency
            </button>
            <button
              className="square-button"
              onClick={() => alert('Button 3 clicked!')}
            >
              Blood
            </button>
            <button
              className="square-button"
              onClick={() => alert('Button 4 clicked!')}
            >
              Resource
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 