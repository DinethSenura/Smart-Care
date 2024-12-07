import React, { useState } from 'react';
import '../Styles/Mainbutt.css';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isQuickSignupModalOpen, setIsQuickSignupModalOpen] = useState(false); // State for quick signup modal
  const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false });
  const [signupData, setSignupData] = useState({ email: '', username: '', password: '' });
  const [quickSignupData, setQuickSignupData] = useState({ phoneNumber: '', password: '' }); // State for quick signup

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleQuickSignupChange = (e) => {
    const { name, value } = e.target;
    setQuickSignupData({
      ...quickSignupData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${formData.username}\nRemember me: ${formData.rememberMe}`);
    setIsModalOpen(false); // Close modal after login
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up with:\nEmail: ${signupData.email}\nUsername: ${signupData.username}`);
    setIsSignupModalOpen(false); // Close modal after signup
  };

  const handleQuickSignupSubmit = (e) => {
    e.preventDefault();
    alert(`Quick signed in with:\nPhone Number: ${quickSignupData.phoneNumber}`);
    setIsQuickSignupModalOpen(false); // Close modal after quick signup
  };

  return (
    <div>
      {/* Buttons in the center */}
      <div className="buttons-container">
        <button className="square-button" onClick={() => setIsModalOpen(true)}>
          Login
        </button>
        <button className="square-button" onClick={() => setIsSignupModalOpen(true)}>
          Signup
        </button>
        <button className="square-button" onClick={() => setIsQuickSignupModalOpen(true)}>
          Quick Signup
        </button>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberMe">Remember me next time</label>
              </div>
              <div className="form-actions">
                <button type="submit" className="login-button">Login</button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signupUsername">Username:</label>
                <input
                  type="text"
                  id="signupUsername"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signupPassword">Password:</label>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="signup-button">Sign Up</button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsSignupModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quick Signup Modal */}
      {isQuickSignupModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Quick Signup</h2>
            <form onSubmit={handleQuickSignupSubmit}>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={quickSignupData.phoneNumber}
                  onChange={handleQuickSignupChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="quickPassword">Password:</label>
                <input
                  type="password"
                  id="quickPassword"
                  name="password"
                  value={quickSignupData.password}
                  onChange={handleQuickSignupChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="quick-signup-button">Sign In</button> {/* Changed to Sign In for clarity */}
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsQuickSignupModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}