import { NextApiRequest, NextApiResponse } from "next/types"
import { createSession, getSessions } from "../../prisma/session"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case 'GET': {
                const sessions = await getSessions();
                return res.json(sessions)
            }                
            case 'POST': {
                const { name } = req.body
                const session = await createSession(name)
                return res.json(session)
            }
            default:
                return res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (error: any) {
        return res.status(500).json({ ...error, message: error.message })
    }
}