'use server'

import { cookies } from 'next/headers'

/**
 * Sign up action.
 * @param formData - The user information.
 */
export async function signUp(formData: FormData) {
	cookies().set({
		name: 'name',
		value: formData.get('name') as string,
	})
}
