import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  disabled = false,
  className = '',
  helpText,
  children
}) {
  const isInvalid = touched && error;
  const isValid = touched && !error;
  
  const renderInput = () => {
    if (children) return children;
    
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`form-control ${isInvalid ? 'is-invalid' : ''} ${isValid ? 'is-valid' : ''} ${className}`}
          rows="4"
        />
      );
    }
    
    if (type === 'select') {
      return (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          className={`form-control ${isInvalid ? 'is-invalid' : ''} ${isValid ? 'is-valid' : ''} ${className}`}
        >
          {children}
        </select>
      );
    }
    
    if (type === 'checkbox') {
      return (
        <div className="flex items-center">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
            className={`h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary ${className}`}
          />
          <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
            {label}
          </label>
        </div>
      );
    }
    
    if (type === 'radio') {
      return (
        <div className="flex items-center">
          <input
            type="radio"
            id={name}
            name={name}
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
            className={`h-4 w-4 text-primary border-gray-300 focus:ring-primary ${className}`}
          />
          <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
            {label}
          </label>
        </div>
      );
    }
    
    return (
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`form-control ${isInvalid ? 'is-invalid' : ''} ${isValid ? 'is-valid' : ''} ${className}`}
        />
        {isValid && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <CheckCircle className="h-5 w-5 text-success" />
          </div>
        )}
        {isInvalid && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AlertCircle className="h-5 w-5 text-error" />
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="form-group">
      {type !== 'checkbox' && type !== 'radio' && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      {renderInput()}
      
      {helpText && !isInvalid && (
        <div className="text-sm text-gray-500 mt-1">{helpText}</div>
      )}
      
      {isInvalid && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>
  );
}
