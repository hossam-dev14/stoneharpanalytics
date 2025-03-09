import { cn } from '@/utils';
import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

const Input = ({
  type = 'text',
  placeholder = '',
  name = '',
  value = '',
  onChange,
  label = '',
  error = '',
  disabled = false,
  className = '',
  required = true,
  ...props
}: InputProps) => {
  return (
    <div className={cn(`flex flex-col `, className
    )}>
      {label && (
        <label className="mb-2 text-sm font-medium text-nuetral-light">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`text-primary w-full px-4 py-3 focus:outline-none focus:ring-1 
        ${disabled ? 'bg-neutral-dark cursor-not-allowed' : ''}
        `}
        // ${error
        //   ? 'border-red-500 focus:ring-red-500'
        //   : 'border-gray-300 focus:ring-blue-500'
        // }
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
};

export default Input;