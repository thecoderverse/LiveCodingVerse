import { NextApiRequest, NextApiResponse } from "next/types";
import { getUserType } from "../../../prisma/user-type";
import { decode } from "../../../utils/jwt/decode";
import { getUser } from "../../../utils/jwt/user";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = await getUser(req);
        const userType = await getUserType(user.id);
        return res.status(200).json(userType);
    } catch (error: any) {
        return res.status(500).json({ ...error, message: error.message })
    }
}
