import { NextApiRequest } from "next/types";
import { decode } from "./decode";

export const getUser = async (req: NextApiRequest) => {
    const { headers } = req;
    const { authorization } = headers;
    if (!authorization) {
        throw new Error('No token');
    }

    const token = authorization.split(' ')[1];
    if (!token) {
        throw new Error('Invalid token');
    }
    const payload = decode(token);
    return payload;
}