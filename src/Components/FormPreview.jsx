// src/components/FormPreview.js
import React from 'react';
// import './FormPreview.css';

const FormPreview = ({ welcomeScreenName, pageName ,email }) => {
  return (
    <div className="form-preview">
      <h1>{welcomeScreenName}</h1>
      <h2>{pageName}</h2>
      {email && <p>Email: {email}</p>}
    </div>
  );
};

export default FormPreview;
