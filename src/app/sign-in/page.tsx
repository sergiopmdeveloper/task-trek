'use client'

import signIn from '@/actions/sign-in'
import Error from '@/components/Error'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Submit from '@/components/Submit'
import { SignInState } from '@/types/sign-in'
import Link from 'next/link'
import { useFormState } from 'react-dom'

const signInState: SignInState = {
	email: [],
	password: [],
	invalidCredentials: false,
}

/**
 * Sign in page component.
 * @returns The page component.
 */
export default function Page() {
	const [formState, formAction] = useFormState(signIn, signInState)

	return (
		<main className="flex h-screen w-screen items-center justify-center px-2">
			<div className="relative w-full rounded bg-theme-black p-6 xs:w-[30rem]">
				<h1 className="text-3xl font-semibold text-theme-white xs:text-4xl">
					Sign in
				</h1>
				<form className="mt-8 flex flex-col gap-5" action={formAction}>
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
					<div className="flex flex-wrap gap-1 text-sm">
						<span className="text-theme-gray">No account yet?</span>
						<Link className="text-theme-yellow underline" href="/sign-up">
							Sign up
						</Link>
					</div>
					<Submit />
				</form>
			</div>
		</main>
	)
}
