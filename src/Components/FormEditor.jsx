// src/components/FormEditor.js
import React, { useState } from 'react';
import StepsSidebar from './StepsSidebar';
import FormPreview from './FormPreview';
// import './FormEditor.css';

const FormEditor = () => {
  // State for welcome screen name and email
  const [welcomeScreenName, setWelcomeScreenName] = useState('Welcome to our form');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Function to handle email validation
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="form-editor-container">
      {/* Sidebar for editing form details */}
      <StepsSidebar
        welcomeScreenName={welcomeScreenName}
        setWelcomeScreenName={setWelcomeScreenName}
        email={email}
        setEmail={handleEmailChange}
        emailError={emailError}
      />
      {/* Preview section displaying form details */}
      <FormPreview welcomeScreenName={welcomeScreenName} email={email} />
    </div>
  );
};

export default FormEditor;
