'use client'

import refreshToken from '@/actions/refresh-token'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

/**
 * User page component.
 * @returns The page component.
 */
export default function Page() {
	const searchParams = useSearchParams()

	useEffect(() => {
		async function refreshTokenWrapper() {
			await refreshToken()
		}

		if (!searchParams.get('recentToken')) {
			refreshTokenWrapper()
		}
	}, [searchParams])

	return (
		<main>
			<h1>User page</h1>
		</main>
	)
}
