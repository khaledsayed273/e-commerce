import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function middleware(req) {
    const cookies = req.cookies;

    let visitorId = cookies.get("visitorId");

    if (!visitorId) {
        const newVisitorId = uuidv4();
        const response = NextResponse.next();

        response.cookies.set('visitorId', newVisitorId, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 365,
            path: '/',
        });

        return response;
    }

    return NextResponse.next();
}
