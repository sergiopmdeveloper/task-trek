'use client'

import { useFormStatus } from 'react-dom'

/**
 * Submit component.
 * @returns The component.
 */
export default function Submit() {
	const { pending } = useFormStatus()

	return (
		<button
			className="rounded bg-theme-yellow px-1.5 py-1 text-theme-white"
			type="submit"
			disabled={pending}
		>
			{pending ? 'Sending...' : 'Send'}
		</button>
	)
}
