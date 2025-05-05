import React, { ReactNode } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  icon?: ReactNode;
  endIcon?: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  required,
  icon,
  endIcon,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-danger-600 ml-1">*</span>}
      </label>
      
      <div className={`relative rounded-md shadow-sm ${error ? 'ring-2 ring-danger-600' : ''}`}>
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`block w-full ${
            icon ? 'pl-10' : 'pl-4'
          } ${
            endIcon ? 'pr-10' : 'pr-4'
          } py-3 border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-800 placeholder-neutral-400 bg-white
            ${error ? 'border-danger-600' : 'border-neutral-300'}
          `}
          autoComplete={type === 'password' ? 'current-password' : type === 'email' ? 'email' : 'off'}
        />
        
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {endIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-danger-600 text-sm mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  );
};

export default FormInput;