import { User } from '@prisma/client'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Input from '../../components/Input'
import { fetchPost } from '../../utils/fetch/post'
import { setLocalStorage } from '../../utils/local-storage/local-storage'

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
    const result = await fetchPost<User>('/api/register', { name, email, password } as User)
    if (result && result.id) {
      setLocalStorage('token', result.token);
      router.push('/login')
    }
  }

  return (
    <Card title='Sign Up'>
      <Input type='text' value={name} onChange={handleNameChange} placeholder='Name' required />
      <Input type='email' value={email} onChange={handleEmailChange} placeholder='Email' required />
      <Input type='password' value={password} onChange={handlePasswordChange} placeholder='Password' required />
      <Button onClick={handleSubmit}>Submit</Button>
    </Card>
  )
}

export default Signup