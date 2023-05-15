import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

type UserType = {
  id: String
  name: String
  email: String
  password: String
  createdAt: String
  updatedAt: String
}

type Users = UserType[]

const Index = () => {
  const [users, setUsers] = useState<Users>([]);
  const getAllUsers = async () => {
    const users = await fetch('/api/user')
    setUsers(await users.json())
  }
  useEffect(()=>{
    getAllUsers()
  },[])

  return (
    <div>
      {users.map((user,index)=> (
        <div key={index}>{user.name}</div>
      ))}
      <Input/>
      <Button/>
    </div>
  )
}

export default Index