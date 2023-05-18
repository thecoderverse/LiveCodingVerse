import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { RootState } from '../store'
import { setUser } from '../store/actions/user'

const Index = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user);

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setUser(name, email, password))
  }

  return (
    <div>
      <h1>Rating System</h1>
      {
        user && <div>
          user: {user.name}
          <br />
          email: {user.email}
          <br />
          password: {user.password}
        </div>
      }
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="email" value={email} onChange={handleEmailChange} />
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Index