// src/components/FormField.js
import React from 'react';

const FormField = ({ field, onRemove }) => {
  return (
    <div className="form-field">
      <label>{field.label}</label>
      {field.type === 'textarea' ? (
        <textarea placeholder={field.label}></textarea>
      ) : (
        <input type={field.type} placeholder={field.label} />
      )}
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default FormField;
