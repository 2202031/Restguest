import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    return NextResponse.json({ userId: params.id });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    return NextResponse.json({ message: 'User updated', userId: params.id });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    return NextResponse.json({ message: 'User deleted', userId: params.id });
}
