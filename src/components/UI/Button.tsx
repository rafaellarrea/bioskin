import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  to?: string;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  to,
  href,
  disabled = false,
  type = 'button',
  icon,
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full shadow-sm focus:outline-none';
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-[#deb887] text-white hover:bg-[#c9a677] hover:shadow-md hover:scale-105',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-md',
    outline: 'bg-transparent border border-[#deb887] text-[#deb887] hover:bg-[#deb887] hover:text-white hover:shadow-md',
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;
  
  // If it's a link (internal)
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }
  
  // If it's an external link
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  // If it's a button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;