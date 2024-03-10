import { NextResponse } from "next/server";

export function middleware(request) {
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.redirect(new URL('/',request.url))
    // }

    const isLogin = false
    if (!isLogin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/about/:path*'],
}