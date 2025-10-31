import React from 'react'

const variantStyles = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-dark-200 hover:bg-dark-300 text-white',
  outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  ghost: 'hover:bg-dark-300 text-gray-300 hover:text-white',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`
        rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-100
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}