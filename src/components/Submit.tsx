'use client'

import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import React from 'react'
import { useFormStatus } from 'react-dom'

/**
 * Submit component.
 * @param {SubmitProps} props - The props of the component.
 * @param {'default' | 'destructive'} props.type - The type of the submit.
 * @param {React.ReactNode} props.children - The children of the component.
 * @returns The component.
 */
export default function Submit({ type, children }: SubmitProps) {
	type = type || 'default'

	const { pending } = useFormStatus()

	return (
		<button
			className={cn(
				'flex items-center justify-center gap-1.5 rounded px-1.5 py-1 text-sm text-theme-white xs:text-base',
				{
					'bg-theme-yellow': type === 'default',
					'bg-red-700': type === 'destructive',
					'hover:brightness-75': !pending,
					'cursor-not-allowed brightness-75': pending,
				},
			)}
			type="submit"
			disabled={pending}
		>
			{children}
			{pending && (
				<LoaderCircle className="animate-spin stroke-theme-white" size={16} />
			)}
		</button>
	)
}

type SubmitProps = {
	type?: 'default' | 'destructive'
	children: React.ReactNode
}
