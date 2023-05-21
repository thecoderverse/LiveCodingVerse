import { NextApiRequest, NextApiResponse } from 'next'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser
} from '../../prisma/user'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          const user = await getUser(req.query.id as string)
          return res.status(200).json(user)
        } else {
          const users = await getAllUsers()
          return res.json(users)
        }
      }
      case 'POST': {
        const { email, name, password } = req.body
        console.log(email, name, password);
        const user = await createUser(email, name, password)
        return res.json(user)
      }
      case 'PUT': {
        const { id, name, email, password } = req.body
        const user = await updateUser(id, email, name, password)
        return res.json(user)
      }
      case 'DELETE': {
        const { id } = req.body
        const user = await deleteUser(id)
        return res.json(user)
      }
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message })
  }
}