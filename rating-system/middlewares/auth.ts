import { NextRequest, NextResponse } from "next/server";
import * as jose from 'jose'

export default async function addAuthMiddleware(req: NextRequest, res: NextResponse) {
    const { nextUrl } = req;
    if (nextUrl.pathname.startsWith('/api') && !nextUrl.pathname.startsWith('/api/register') && !nextUrl.pathname.startsWith('/api/login')) {
        const token = req.headers.get('authorization');
        const tokenType = token?.split(' ')[0] as string;

        if (tokenType !== 'Bearer') {
            throw new Error('Invalid token type');
        }

        const bearerToken = token?.split(' ')[1] as string;
        if (!token || !bearerToken) {
            throw new Error('No token');
        }
        
        const key = new TextEncoder().encode(process.env.JWT_SECRET);
        const verifiedToken = await jose.jwtVerify(bearerToken, key);

        if (!verifiedToken) {
            throw new Error('Invalid token');
        }
        
        return NextResponse.next();
    }
}