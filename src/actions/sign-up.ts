'use server'

import prisma from '@/lib/prisma'
import { SignUpState } from '@/types/sign-up'
import { SignUpSchema } from '@/validation/sign-up'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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

	const existingUser = await prisma.user.findUnique({
		where: { email: email },
	})

	if (existingUser) {
		return {
			name: [],
			email: [],
			password: [],
			userAlreadyExists: true,
		}
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	const newUser = await prisma.user.create({
		data: {
			name: name,
			email: email,
			password: hashedPassword,
		},
	})

	cookies().set({
		name: 'userId',
		value: newUser.id.toString(),
		httpOnly: true,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
	})

	redirect(`/user/${newUser.id}`)
}
