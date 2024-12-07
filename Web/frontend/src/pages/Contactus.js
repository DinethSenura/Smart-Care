import React, { useState, useEffect } from 'react';
import Loader from '../components/./Loader';
import Toptwobutt from '../components/Toptwobuttons';
import Navigationbr from '../components/Navigationbr';

export default function Contactus() {
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
        </div>
      )}
    </div>
  );
}
