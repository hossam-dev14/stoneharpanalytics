import React from 'react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  rows?: number;
  required?: boolean;
}

const Textarea = ({
  placeholder = '',
  value = '',
  name = '',
  onChange,
  label = '',
  error = '',
  disabled = false,
  className = '',
  rows = 4,
  required = true,

  ...props
}: TextareaProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-2 text-sm font-medium text-nuetral-light">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        className={`text-primary w-full px-4 py-3 focus:outline-none focus:ring-1 
        ${disabled ? 'bg-neutral-dark cursor-not-allowed' : ''}
        `}
        // ${error
        //   ? 'border-error focus:ring-error'
        //   : 'border-success focus:ring-success'
        // } 
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
};

export default Textarea;