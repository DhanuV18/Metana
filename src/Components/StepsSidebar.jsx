// src/components/StepsSidebar.js
import React from 'react';
// import './StepsSidebar.css';

const StepsSidebar = ({ welcomeScreenName, setWelcomeScreenName, email, setEmail, emailError }) => {
  return (
    <div className="steps-sidebar">
      <h3>Steps</h3>
      
      {/* Input for Welcome Screen Name */}
      <div className="form-group">
        <label>Welcome Screen Name</label>
        <input
          type="text"
          value={welcomeScreenName}
          onChange={(e) => setWelcomeScreenName(e.target.value)}
          placeholder="Enter Welcome Screen Name"
        />
      </div>

      {/* Input for Email with Validation */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
        />
        {emailError && <span className="error-message">{emailError}</span>}
      </div>
    </div>
  );
};

export default StepsSidebar;
