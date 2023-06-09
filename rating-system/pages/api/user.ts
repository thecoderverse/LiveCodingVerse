import { NextApiRequest, NextApiResponse } from 'next'
import {
  getAllUsers,
  getUser,
} from '../../prisma/user'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET': {
        const { id } = req.query
        if (id) {
          const user = await getUser(id as string)
          return res.status(200).json(user)
        } else {
          const users = await getAllUsers()
          return res.status(200).json(users)
        }
      }
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message })
  }
}