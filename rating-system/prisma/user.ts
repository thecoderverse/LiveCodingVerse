import prisma from './prisma'
import { hash, verify } from 'argon2'

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})
  return users
}

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}

export const createUser = async (email: string, name: string, password: string) => {
  const hashedPassword = await hash(password);
  console.log(email, name, hashedPassword)
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword
    }
  })
  return user
}

export const updateUser = async (id: string, email: string, name: string, password: string) => {
  const hashedPassword = await hash(password);
  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      email,
      password: hashedPassword,
      name,
    }
  })
  return user
}

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id
    }
  })
  return user
}

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })
  if (!user) throw new Error('User not found')
  const valid = await verify(user.password, password)
  if (!valid) throw new Error('Invalid password')
  return user
}