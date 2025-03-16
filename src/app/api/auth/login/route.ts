import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth/next';

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    return NextResponse.json({ success: true, user: session.user || {} });
}
