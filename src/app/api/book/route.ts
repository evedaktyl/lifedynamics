import { NextRequest, NextResponse } from "next/server";
import { sendBookingEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
    const { name, email, phone, message, date, time } = await req.json();

    if (!name || !email || !phone || !date || !time) {
        return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
        );
    }

    const { error } = await sendBookingEmail({
        name,
        email,
        phone,
        message,
        date,
        time,
    });

    if (error) {
        return NextResponse.json(
        { error: 'Failed to send booking notification.' },
        { status: 500 }
        );
    }

    return NextResponse.json({ success: true });
}