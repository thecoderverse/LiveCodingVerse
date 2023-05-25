import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import addRequestLogMiddleware from './middlewares/request-log';
import addAuthMiddleware from './middlewares/auth';

export function middleware(request: NextRequest, response: NextResponse) {
    addRequestLogMiddleware(request, response);
    addAuthMiddleware(request, response);
}