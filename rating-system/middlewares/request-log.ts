import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function addRequestLogMiddleware(req: NextRequest, res: NextResponse) {
    const { url, method, body, nextUrl } = req;

    if (nextUrl.pathname.startsWith('/api')) {
        console.log('---');
        console.log(`[${method}] ${url}`);
        console.log(body);
        console.log('---');
    }

    return NextResponse.next();
}