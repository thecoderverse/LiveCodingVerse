import { User } from '@prisma/client'
import { useRouter } from 'next/router'
import React from 'react'
import { fetchPost } from '../../fetch-helpers/post'

const Signup = () => {
  const router = useRouter()
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

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const result = await fetchPost<User>('/api/user', { name, email, password } as User)
    if (result && result.id) {
      router.push('/login')
    }
  }

  return (
    <div>
      <h1>Rating System</h1>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="email" value={email} onChange={handleEmailChange} />
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signup