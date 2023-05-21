import { NextApiRequest, NextApiResponse } from "next";
import { login } from "../../prisma/user";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST': {
            const { email, password } = req.body;
            const user = await login(email, password);
            return res.json(user);
        }
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}