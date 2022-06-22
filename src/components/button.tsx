import React from 'react';

import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  className?: string;
}

function Button({ children, onClick, type = 'primary', className }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-1 rounded text-sm hover:shadow-md',
        type === 'primary' && 'text-white bg-blue-500 hover:bg-blue-600',
        type === 'secondary' && 'text-black bg-white hover:bg-gray-100 border border-gray-300',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
