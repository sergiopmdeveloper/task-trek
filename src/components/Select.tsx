import { cn } from '@/lib/utils'
import React from 'react'

/**
 * Select component.
 * @param {SelectProps} props - The props of the component.
 * @param {string[]} props.errors - The errors of the select.
 * @param {React.ReactNode} props.children - The children of the select.
 * @param {React.SelectHTMLAttributes<HTMLSelectElement>} props.props - The props of the select.
 * @returns The component.
 */
export default function Select({ errors, children, ...props }: SelectProps) {
	return (
		<select
			className={cn(
				'rounded bg-theme-gray px-1.5 py-1 text-sm text-theme-black outline outline-2 outline-theme-black xs:text-base',
				errors?.length ?? 0 > 0
					? 'outline-red-400'
					: 'focus:outline-theme-yellow',
			)}
			defaultValue=""
			{...props}
		>
			<option value="" disabled hidden>
				Select an option
			</option>
			{children}
		</select>
	)
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
	errors?: string[]
}
