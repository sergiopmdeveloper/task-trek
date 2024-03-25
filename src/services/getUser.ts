import { type ErrorResponse, type UserResponse } from '@/types/user'

/**
 * User service.
 * @param {string} userId - The user ID.
 * @param {token} token - The token for the request.
 * @returns The user promise.
 * @throws An error if the request fails.
 */
export default async function getUser(
	userId: string | undefined,
	token: string | undefined,
): Promise<UserResponse> {
	const response = await fetch(`/api/user?userId=${userId}&token=${token}`)

	const data = await response.json()

	if (!response.ok) {
		throw new Error((data as ErrorResponse).detail)
	}

	return { ...(data as UserResponse) }
}
