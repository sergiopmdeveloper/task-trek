'use server'

import prisma from '@/lib/prisma'
import { SignInState } from '@/types/sign-in'
import { generateJwt } from '@/utils/jwt'
import { SignInSchema } from '@/validation/sign-in'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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

	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	})

	const invalidCredentials =
		!user || !(await bcrypt.compare(password, user.password))

	if (invalidCredentials) {
		return {
			email: [],
			password: [],
			invalidCredentials: true,
		}
	}

	const token = await generateJwt()

	cookies().set({
		name: 'userId',
		value: user.id.toString(),
		httpOnly: true,
	})

	cookies().set({
		name: 'token',
		value: token,
		httpOnly: true,
	})

	redirect(`/user/${user.id}?token=${token}`)
}
