import * as Z from 'zod'

export const SignUpSchema = Z.object({
	name: Z.string().min(1, 'Required'),
	email: Z.string().min(1, 'Required').email('Invalid email'),
	password: Z.string().min(1, 'Required').min(6, 'Too short'),
})
