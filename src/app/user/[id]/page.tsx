'use client'

import signOut from '@/actions/sign-out'
import Header from '@/components/Header'
import Submit from '@/components/Submit'
import useUser from '@/hooks/useUser'
import { Plus } from 'lucide-react'

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
						<Submit type="destructive">Sign out</Submit>
					</form>
				</Header>
				<div className="mt-4 h-16 w-full px-4">
					<div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between rounded-xl bg-theme-yellow px-4">
						<h1 className="text-lg font-semibold text-theme-white">Tasks</h1>
						<div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-theme-gray hover:brightness-75">
							<Plus className="h-6 w-6 stroke-theme-black" />
						</div>
					</div>
				</div>
			</main>
		)
	}
}
