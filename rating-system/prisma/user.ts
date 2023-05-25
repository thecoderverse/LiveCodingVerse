import prisma from './prisma'
import { hash, verify } from 'argon2'
import * as jose from 'jose'
import { createDefaultUserType, getUserType } from './user-type';

export const createUser = async (email: string, name: string, password: string) => {
  const hashedPassword = await hash(password);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword
    }
  })

  const userType = await createDefaultUserType(user.id);

  const jwt = new jose.SignJWT({ id: user.id, name: user.name, email: user.email, user_type: userType.type }).setProtectedHeader({ alg: 'HS256' });
  const key = new TextEncoder().encode(process.env.JWT_SECRET);
  user.token = await jwt.sign(key);
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
  const userType = await getUserType(user.id);

  if (!userType) throw new Error('User type not found')

  const jwt = new jose.SignJWT({ id: user.id, name: user.name, email: user.email, user_type: userType.type }).setProtectedHeader({ alg: 'HS256' });
  const key = new TextEncoder().encode(process.env.JWT_SECRET);
  user.token = await jwt.sign(key);
  
  return user
}

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })
  return user
}

export const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}