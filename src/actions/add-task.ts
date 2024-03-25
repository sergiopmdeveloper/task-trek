'use server'

import prisma from '@/lib/prisma'
import { AddTaskState } from '@/types/tasks'
import { AddTaskSchema } from '@/validation/tasks'
import { cookies } from 'next/headers'

/**
 * Add task action.
 * @param {AddTaskState} _ - The form state.
 * @param {FormData} formData - The task information.
 */
export default async function addTask(_: AddTaskState, formData: FormData) {
	const name = formData.get('name') as string
	const priority = (formData.get('priority') ?? '') as string
	const deadline = formData.get('deadline') as string
	const description = formData.get('description') as string

	const validatedFields = AddTaskSchema.safeParse({
		name: name,
		priority: priority,
		deadline: deadline,
		description: description,
	})

	if (!validatedFields.success) {
		return {
			name: validatedFields.error.flatten().fieldErrors.name ?? [],
			priority: validatedFields.error.flatten().fieldErrors.priority ?? [],
			deadline: validatedFields.error.flatten().fieldErrors.deadline ?? [],
			description:
				validatedFields.error.flatten().fieldErrors.description ?? [],
		}
	}

	const userId = cookies().get('userId')?.value as string

	await prisma.task.create({
		data: {
			name: name,
			priority: priority,
			deadline: new Date(deadline),
			description: description,
			userId: userId,
		},
	})

	return {
		name: [],
		priority: [],
		deadline: [],
		description: [],
	}
}
