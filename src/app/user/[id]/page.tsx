'use client'

import useRefreshToken from '@/hooks/useRefreshToken'

/**
 * User page component.
 * @returns The page component.
 */
export default function Page() {
	useRefreshToken()

	return (
		<main>
			<h1>User page</h1>
		</main>
	)
}
