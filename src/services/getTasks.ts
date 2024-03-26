import { type ErrorResponse, type TaskResponse } from '@/types/tasks'

/**
 * Tasks service.
 * @param {string} userId - The user ID.
 * @param {token} token - The token for the request.
 * @returns The tasks promise.
 * @throws An error if the request fails.
 */
export default async function getTasks(
	userId: string | undefined,
	token: string | undefined,
): Promise<TaskResponse> {
	const response = await fetch(`/api/tasks?userId=${userId}&token=${token}`)

	const data = await response.json()

	if (!response.ok) {
		throw new Error((data as ErrorResponse).detail)
	}

	return { ...(data as TaskResponse) }
}
