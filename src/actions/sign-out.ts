'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Sign out action.
 */
export default async function signOut() {
	const cookieStore = cookies()

	cookieStore.delete('userId')
	cookieStore.delete('token')

	redirect('/sign-in')
}
