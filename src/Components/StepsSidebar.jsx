// src/components/StepsSidebar.js
import React from 'react';
// import './StepsSidebar.css';

const StepsSidebar = ({ welcomeScreenName, setWelcomeScreenName, pageName, setPageName, email, setEmail, emailError }) => {
  return (
    <div className="steps-sidebar">
      <h3>DashBoard</h3>
      
  
      <div className="form-group">
        <label>Welcome to Dashboard</label>
        <input
          type="text"
          value={welcomeScreenName}
          onChange={(e) => setWelcomeScreenName(e.target.value)}
          placeholder="Welcome Screen"
        />
          <input
          type="text"
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
          placeholder="Enter your name"
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
