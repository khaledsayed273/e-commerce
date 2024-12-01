import { NextResponse } from "next/server";

export async function middleware(req) {
    const cookies = req.cookies;

    return NextResponse.next();
}
