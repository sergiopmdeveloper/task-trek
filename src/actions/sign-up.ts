'use server'

import { SignUpState } from '@/types/sign-up'
import { SignUpSchema } from '@/validation/sign-up'

/**
 * Sign up action.
 * @param {SignUpState} _ - The form state.
 * @param {FormData} formData - The user information.
 */
export default async function signUp(_: SignUpState, formData: FormData) {
	const name = formData.get('name') as string
	const email = formData.get('email') as string
	const password = formData.get('password') as string

	const validatedFields = SignUpSchema.safeParse({
		name: name,
		email: email,
		password: password,
	})

	if (!validatedFields.success) {
		return {
			name: validatedFields.error.flatten().fieldErrors.name ?? [],
			email: validatedFields.error.flatten().fieldErrors.email ?? [],
			password: validatedFields.error.flatten().fieldErrors.password ?? [],
			userAlreadyExists: false,
		}
	}

	return {
		name: [],
		email: [],
		password: [],
		userAlreadyExists: false,
	}
}
