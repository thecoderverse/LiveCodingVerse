import { NextApiRequest, NextApiResponse } from "next/types"
import { createCriteria, getCriterias } from "../../prisma/criteria";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case 'GET': {
                const criterias = await getCriterias();
                return res.json(criterias)
            }                
            case 'POST': {
                const { title, description } = req.body
                const criteria = await createCriteria(title, description)
                return res.json(criteria)
            }
            default:
                return res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    } catch (error: any) {
        return res.status(500).json({ ...error, message: error.message })
    }
}