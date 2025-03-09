"use client";

import { cn } from '@/utils';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface buttonProps {
  className?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};

function Button({ children, variant = 'primary', size = 'md', disabled = false, className }: buttonProps) {

  const baseStyle = 'text-lg px-4 py-2 hover:bg-secondary-dark hover:text-secondary-dark border-secondary border-4 transition-all duration-300 ease-in-out';

  const variantStyles = {
    primary: 'bg-primary text-white hover:text-primary-dark hover:bg-white',
    secondary: 'bg-secondary text-white hover:bg-white hover:text-secondary-dark',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  const sizeStyles = {
    sm: 'text-sm px-8 py-2',
    md: 'text-base px-10 py-3',
    lg: 'text-lg px-12 py-4',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <motion.button
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      className={cn(`${baseStyle}  
      ${variantStyles[variant]} 
      ${sizeStyles[size]}
      ${disabled ? disabledStyles : ''} w-72`, className)}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )

}

export default Button;