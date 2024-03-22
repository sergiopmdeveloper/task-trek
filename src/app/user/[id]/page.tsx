'use client'

import signOut from '@/actions/sign-out'
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
				<header className="h-20 w-full bg-theme-black">
					<div className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
						<h1 className="text-lg text-theme-white">Hello {user.name}</h1>
						<form action={signOut}>
							<button className="rounded bg-red-700 px-2 py-1 text-theme-white hover:brightness-75">
								Sign out
							</button>
						</form>
					</div>
				</header>
			</main>
		)
	}
}
