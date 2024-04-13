'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Finish task action.
 * @param {string} taskID - The task ID.
 */
export default async function finishTask(taskID: string) {
	const userId = cookies().get('userId')?.value as string

	revalidatePath('/user/[id]', 'page')

	try {
		await prisma.task.update({
			where: {
				id: taskID,
			},
			data: {
				done: true,
			},
		})
	} catch (error) {
		redirect(`user/${userId}`)
	}

	redirect(`user/${userId}`)
}
