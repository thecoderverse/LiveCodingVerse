import React from 'react'

export type ButtonProps = {
  children: React.ReactNode
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="bg-blue-900 text-white rounded-md p-2 m-2" type="submit" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button