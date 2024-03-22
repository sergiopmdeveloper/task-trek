import getUser from '@/services/getUser'
import { type UserResponse } from '@/types/user'
import { useEffect, useState } from 'react'

/**
 * User hook.
 * @param {string} userId - The user ID.
 * @param {token} token - The authentication token.
 * @returns The user state and the setter.
 */
export default function useUser(userId: string, token: string) {
	const [user, setUser] = useState<UserResponse>()

	useEffect(() => {
		async function getUserWrapper() {
			setUser(await getUser(userId, token))
		}

		getUserWrapper()
	}, [])

	return { user, setUser }
}
