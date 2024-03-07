import { NextResponse } from "next/server";

export async function POST(request) {
    const req = await request.json()

    return NextResponse.json({
        status: 200,
        message: 'Success',
        data: req
    })
}