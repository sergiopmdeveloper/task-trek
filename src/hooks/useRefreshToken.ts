'use client'

import refreshToken from '@/actions/refresh-token'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Refresh token hook.
 */
export default function useRefreshToken() {
	const searchParams = useSearchParams()

	useEffect(() => {
		async function refreshTokenWrapper() {
			await refreshToken()
		}

		if (!searchParams.get('recentToken')) {
			refreshTokenWrapper()
		}
	}, [searchParams])
}
