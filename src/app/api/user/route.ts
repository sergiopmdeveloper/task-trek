import prisma from '@/lib/prisma'
import { type ErrorResponse, type UserResponse } from '@/types/user'
import { verifyJwtToken } from '@/utils/jwt'
import { Prisma } from '@prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(
	request: NextRequest,
): Promise<NextResponse<UserResponse | ErrorResponse>> {
	const userId = request.nextUrl.searchParams.get('userId')
	const token = request.nextUrl.searchParams.get('token')

	if (!userId) {
		return NextResponse.json({ detail: 'User ID is required' }, { status: 400 })
	}

	if (!token) {
		return NextResponse.json({ detail: 'Token is required' }, { status: 400 })
	}

	if (!(await verifyJwtToken(token))) {
		return NextResponse.json({ detail: 'Invalid token' }, { status: 401 })
	}

	let user

	try {
		user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		})
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2023') {
				return NextResponse.json({ detail: 'Invalid user ID' }, { status: 400 })
			}
		}
	}

	if (!user) {
		return NextResponse.json({ detail: 'User not found' }, { status: 404 })
	}

	const userData = {
		name: user.name,
		email: user.email,
	}

	return NextResponse.json({ ...userData })
}
