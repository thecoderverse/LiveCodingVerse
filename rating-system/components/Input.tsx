import React from 'react'

export type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string,
  required?: boolean
}

const Input = ({ value, onChange, placeholder, type, required }: InputProps) => {
  return (
    <>
      <input type={type} value={value} onChange={onChange} className="border border-black-900 border-radius-2 rounded-md placeholder-black-900 m-2 p-2" placeholder={placeholder} />
    </>
  )
}

export default Input