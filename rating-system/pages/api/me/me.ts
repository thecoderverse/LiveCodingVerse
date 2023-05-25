import { NextApiRequest, NextApiResponse } from "next/types";
import { getUser } from "../../../utils/jwt/user";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await getUser(req);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ ...error, message: error.message })
    }
}
