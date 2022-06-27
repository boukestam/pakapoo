import React from 'react';

import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

function Button({ children, onClick, type = 'primary', className, disabled }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-1 rounded text-sm',
        !disabled && 'hover:shadow-md',
        type === 'primary' && 'text-white bg-blue-500 hover:bg-blue-600',
        type === 'secondary' && 'text-black border border-gray-300',
        type === 'secondary' && !disabled && 'bg-white hover:bg-gray-100',
        type === 'secondary' && disabled && 'bg-gray-100',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
