import { NextApiRequest, NextApiResponse } from 'next'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser
} from '../../prisma/user'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          // Get a single user if id is provided is the query
          // api/users?id=1
          const user = await getUser(req.query.id as string)
          return res.status(200).json(user)
        } else {
          // Otherwise, fetch all users
          const users = await getAllUsers()
          return res.json(users)
        }
      }
      case 'POST': {
        // Create a new user
        const { email, name, birthYear } = req.body
        const user = await createUser(email, name, birthYear)
        return res.json(user)
      }
      case 'PUT': {
        // Update an existing user
        const { id, name, email, password } = req.body
        const user = await updateUser(id,email, name, password)
        return res.json(user)
      }
      case 'DELETE': {
        // Delete an existing user
        const { id } = req.body
        const user = await deleteUser(id)
        return res.json(user)
      }
      default:
        break
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message })
  }
}