import Input from '@/components/Input'
import Label from '@/components/Label'
import Submit from '@/components/Submit'
import Link from 'next/link'

/**
 * Sign up page component.
 * @returns The page component.
 */
export default function Page() {
	return (
		<main className="flex h-screen w-screen items-center justify-center">
			<div className="w-[30rem] rounded bg-theme-black p-6">
				<h1 className="text-4xl font-semibold text-theme-white">Sign up</h1>
				<form className="mt-8 flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							type="text"
							placeholder="Name..."
							autoComplete="name"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="text"
							placeholder="Email..."
							autoComplete="email"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="Password..."
							autoComplete="current-password"
						/>
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
