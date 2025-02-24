import { stripe } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // here we'll get session

    try {
        const { searchParams } = new URL(req.url);
        const session_id = searchParams.get('session_id');

        if (!session_id) return NextResponse.json({ error: "Session Id Required" }, { status: 400 });
        const session = await stripe.checkout.sessions.retrieve(session_id);

        if (!session) {
            return NextResponse.json({ error: "Invalid session ID" }, { status: 404 });
        }

        return NextResponse.json({
            amount: session.amount_total,
            currency: session.currency,
            payment_status: session.payment_status
        }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }

}