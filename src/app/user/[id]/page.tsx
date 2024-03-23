'use client'

import signOut from '@/actions/sign-out'
import Header from '@/components/Header'
import useUser from '@/hooks/useUser'

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
	const user = useUser(params.id, searchParams.token)

	if (user.name && user.email) {
		return (
			<main>
				<Header>
					<h1 className="text-lg text-theme-white">Hello {user.name}</h1>
					<form action={signOut}>
						<button className="rounded bg-red-700 px-2 py-1 text-theme-white hover:brightness-75">
							Sign out
						</button>
					</form>
				</Header>
			</main>
		)
	}
}
