import React, { useState } from 'react';
import StepsSidebar from './StepsSidebar';
import FormPreview from './FormPreview';
// import './FormEditor.css';

const FormEditor = () => {

  const [welcomeScreenName, setWelcomeScreenName] = useState('');
  const [pageName,setPageName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');


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

      <StepsSidebar
        welcomeScreenName={welcomeScreenName}
        setWelcomeScreenName={setWelcomeScreenName}
        pageName={pageName}
        setPageName={setPageName}
        email={email}
        setEmail={handleEmailChange}
        emailError={emailError}
      />

      <FormPreview welcomeScreenName={welcomeScreenName} pageName={pageName} email={email} />
    </div>
  );
};

export default FormEditor;
