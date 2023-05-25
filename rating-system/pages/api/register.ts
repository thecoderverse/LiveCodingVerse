import { NextApiRequest, NextApiResponse } from 'next'
import {
  createUser,
} from '../../prisma/user'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'POST': {
        const { email, name, password } = req.body
        const user = await createUser(email, name, password)
        return res.json(user)
      }
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message })
  }
}