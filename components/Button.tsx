import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  arrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  arrow = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 transform group hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-brand-yellow text-black hover:bg-white hover:text-black focus:ring-brand-yellow",
    secondary: "bg-white text-black hover:bg-brand-yellow focus:ring-white",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black focus:ring-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {arrow && <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;