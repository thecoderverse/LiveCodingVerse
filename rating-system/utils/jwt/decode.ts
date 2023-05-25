import { User } from '@prisma/client';
import * as jose from 'jose';

export const decode = (token: string) => {
    const decodedToken = jose.decodeJwt(token);
    return decodedToken as User;
}