import React from 'react'

interface ButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  kind: 'primary' | 'secondary' | 'warning'
  onClick?: () => void
  props?: any
  type?: 'submit' | 'button'
}

const Button = ({
  kind,
  children,
  disabled = false,
  type,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClass =
    'block py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none disabled:opacity-50'
  const primaryClass =
    'text-white  bg-indigo-700 hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  const secondaryClass =
    'text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  const warningClass =
    'text-white bg-red-700 hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500'

  let colorClass = ''
  if (kind === 'primary') {
    colorClass = primaryClass
  }

  if (kind === 'secondary') {
    colorClass = secondaryClass
  }

  if (kind === 'warning') {
    colorClass = warningClass
  }

  const classes = `${baseClass} ${colorClass}`

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
