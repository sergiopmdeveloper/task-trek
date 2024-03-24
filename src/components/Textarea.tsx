import { cn } from '@/lib/utils'
import React from 'react'

/**
 * Textarea component.
 * @param {TextareaProps} props - The props of the component.
 * @param {string[]} props.errors - The errors of the textarea.
 * @param {React.TextareaHTMLAttributes<HTMLTextAreaElement>} props.props - The props of the textarea.
 * @returns The component.
 */
export default function Textarea({ errors, ...props }: TextareaProps) {
	return (
		<textarea
			className={cn(
				'rounded bg-theme-gray px-1.5 py-1 text-sm outline outline-2 xs:text-base',
				errors?.length ?? 0 > 0
					? 'outline-red-400'
					: 'focus:outline-theme-yellow',
			)}
			{...props}
		/>
	)
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	errors?: string[]
}
