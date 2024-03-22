'use client'

import getUser from '@/services/getUser'
import { UserResponse } from '@/types/user'
import { useEffect, useState } from 'react'

/**
 * User page component.
 * @returns The page component.
 */
export default function Page({
	params,
	searchParams,
}: {
	params: { id: string }
	searchParams: { token: string }
}) {
	const userId = params.id
	const token = searchParams.token

	const [user, setUser] = useState<UserResponse>()

	useEffect(() => {
		async function getUserWrapper() {
			const userData = await getUser(userId, token)
			setUser(userData)
		}

		getUserWrapper()
	}, [])

	if (user) {
		return (
			<main>
				<h1>Hello {user.name}</h1>
			</main>
		)
	}
}
