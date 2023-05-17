import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest, response: NextResponse) {
    const { url, method, body, nextUrl } = request;

    if (nextUrl.pathname.startsWith('/api')) {
        console.log('---');
        console.log(`[${method}] ${url}`);
        console.log(body);
        console.log('---');
    }
}