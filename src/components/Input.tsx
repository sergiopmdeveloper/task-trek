import React from 'react'

/**
 * Input component.
 * @returns The component.
 */
export default function Input({ ...props }: InputProps) {
	return (
		<input
			className="rounded bg-theme-gray px-1.5 py-1 focus:outline focus:outline-2 focus:outline-theme-yellow"
			{...props}
		/>
	)
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>
