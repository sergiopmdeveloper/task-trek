'use server'

import { SignInState } from '@/types/sign-in'
import { SignInSchema } from '@/validation/sign-in'

/**
 * Sign in action.
 * @param {SignInState} _ - The form state.
 * @param {FormData} formData - The user information.
 */
export default async function signIn(_: SignInState, formData: FormData) {
	const email = formData.get('email') as string
	const password = formData.get('password') as string

	const validatedFields = SignInSchema.safeParse({
		email: email,
		password: password,
	})

	if (!validatedFields.success) {
		return {
			email: validatedFields.error.flatten().fieldErrors.email ?? [],
			password: validatedFields.error.flatten().fieldErrors.password ?? [],
			invalidCredentials: false,
		}
	}

	return {
		email: [],
		password: [],
		invalidCredentials: false,
	}
}
