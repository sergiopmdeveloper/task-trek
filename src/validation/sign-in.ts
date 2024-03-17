import * as Z from 'zod'

export const SignInSchema = Z.object({
	email: Z.string().min(1, 'Required'),
	password: Z.string().min(1, 'Required'),
})
