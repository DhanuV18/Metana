// src/components/FormPreview.js
import React from 'react';
// import './FormPreview.css';

const FormPreview = ({ welcomeScreenName, email }) => {
  return (
    <div className="form-preview">
      <h1>{welcomeScreenName}</h1>
      {email && <p>Email: {email}</p>}
    </div>
  );
};

export default FormPreview;
