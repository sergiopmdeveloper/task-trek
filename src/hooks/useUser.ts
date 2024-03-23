import getUser from '@/services/getUser'
import { useUserStore } from '@/stores/userStore'
import { useEffect } from 'react'

/**
 * User hook.
 * @param {string} userId - The user ID.
 * @param {token} token - The authentication token.
 * @returns The user state and the setter.
 */
export default function useUser(userId: string, token: string) {
	const setUser = useUserStore((state) => state.setUser)

	useEffect(() => {
		async function getUserWrapper() {
			setUser(await getUser(userId, token))
		}

		getUserWrapper()
	}, [userId, token, setUser])

	return {
		name: useUserStore((state) => state.name),
		email: useUserStore((state) => state.email),
	}
}
