import prisma from '@/lib/prisma'
import { ErrorResponse, TaskResponse } from '@/types/tasks'
import { verifyJwtToken } from '@/utils/jwt'
import { Prisma } from '@prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(
	request: NextRequest,
): Promise<NextResponse<TaskResponse | ErrorResponse>> {
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

	let tasks

	try {
		tasks = await prisma.task.findMany({
			where: {
				userId: userId,
			},
		})
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2023') {
				return NextResponse.json({ detail: 'Invalid user ID' }, { status: 400 })
			}
		}
	}

	let tasksData: TaskResponse

	if (!tasks) {
		tasksData = []
		return NextResponse.json(tasksData)
	}

	tasksData = tasks.map((task) => ({
		id: task.id,
		name: task.name,
		priority: task.priority,
		deadline: task.deadline,
		description: task.description,
	}))

	return NextResponse.json(tasksData)
}
