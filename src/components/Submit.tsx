'use client'

import { useFormStatus } from 'react-dom'
import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

/**
 * Submit component.
 * @returns The component.
 */
export default function Submit() {
	const { pending } = useFormStatus()

	return (
		<button
			className={cn(
				'flex items-center justify-center gap-1.5 rounded bg-theme-yellow px-1.5 py-1 text-theme-white',
				{
					'hover:brightness-75': !pending,
					'cursor-not-allowed brightness-75': pending,
				},
			)}
			type="submit"
			disabled={pending}
		>
			{pending ? 'Sending...' : 'Send'}
			{pending && (
				<LoaderCircle className="animate-spin stroke-theme-white" size={16} />
			)}
		</button>
	)
}
