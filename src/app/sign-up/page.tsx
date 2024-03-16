'use client'

import signUp from '@/actions/sign-up'
import Error from '@/components/Error'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Submit from '@/components/Submit'
import { type SignUpState } from '@/types/sign-up'
import Link from 'next/link'
import { useFormState } from 'react-dom'

const signUpState: SignUpState = {
	name: [],
	email: [],
	password: [],
	userAlreadyExists: false,
}

/**
 * Sign up page component.
 * @returns The page component.
 */
export default function Page() {
	const [formState, formAction] = useFormState(signUp, signUpState)

	return (
		<main className="flex h-screen w-screen items-center justify-center">
			<div className="relative w-[30rem] rounded bg-theme-black p-6">
				{formState.userAlreadyExists && (
					<div className="absolute -top-8 right-0">
						<Error>User already exists</Error>
					</div>
				)}
				<h1 className="text-4xl font-semibold text-theme-white">Sign up</h1>
				<form className="mt-8 flex flex-col gap-5" action={formAction}>
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Name</Label>
						<Input
							errors={formState.name}
							name="name"
							id="name"
							type="text"
							placeholder="Name..."
							autoComplete="name"
						/>
						{formState.name.length > 0 && <Error>{formState.name[0]}</Error>}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							errors={formState.email}
							name="email"
							id="email"
							type="text"
							placeholder="Email..."
							autoComplete="email"
						/>
						{formState.email.length > 0 && <Error>{formState.email[0]}</Error>}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							errors={formState.password}
							name="password"
							id="password"
							type="password"
							placeholder="Password..."
							autoComplete="current-password"
						/>
						{formState.password.length > 0 && (
							<Error>{formState.password[0]}</Error>
						)}
					</div>
					<div className="flex gap-1 text-sm">
						<span className="text-theme-gray">Already have an account?</span>
						<Link className="text-theme-yellow underline" href="/sign-in">
							Sign in
						</Link>
					</div>
					<Submit />
				</form>
			</div>
		</main>
	)
}
