import { cn } from '@/lib/utils'
import React from 'react'

/**
 * Input component.
 * @param {InputProps} props - The props of the component.
 * @param {string[]} props.errors - The errors of the input.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props.props - The props of the input.
 * @returns The component.
 */
export default function Input({ errors, ...props }: InputProps) {
	return (
		<input
			className={cn(
				'rounded bg-theme-gray px-1.5 py-1 outline outline-2',
				errors?.length ?? 0 > 0
					? 'outline-red-400'
					: 'focus:outline-theme-yellow',
			)}
			{...props}
		/>
	)
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	errors?: string[]
}
