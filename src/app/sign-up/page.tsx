'use client'

import signUp from '@/actions/sign-up'
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
			<div className="w-[30rem] rounded bg-theme-black p-6">
				<h1 className="text-4xl font-semibold text-theme-white">Sign up</h1>
				<form className="mt-8 flex flex-col gap-5" action={formAction}>
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Name</Label>
						<Input
							name="name"
							id="name"
							type="text"
							placeholder="Name..."
							autoComplete="name"
						/>
						{formState.name.length > 0 && (
							<span className="text-xs text-red-400">{formState.name[0]}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							name="email"
							id="email"
							type="text"
							placeholder="Email..."
							autoComplete="email"
						/>
						{formState.email.length > 0 && (
							<span className="text-xs text-red-400">{formState.email[0]}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							name="password"
							id="password"
							type="password"
							placeholder="Password..."
							autoComplete="current-password"
						/>
						{formState.password.length > 0 && (
							<span className="text-xs text-red-400">
								{formState.password[0]}
							</span>
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
