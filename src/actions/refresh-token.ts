'use server'

import { generateJwt } from '@/utils/jwt'
import { cookies } from 'next/headers'

/**
 * Refresh token action.
 */
export default async function refreshToken() {
	cookies().set({
		name: 'token',
		value: await generateJwt(),
		httpOnly: true,
	})
}
