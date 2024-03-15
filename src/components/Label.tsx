import React from 'react'

/**
 * Label component.
 * @returns The component.
 */
export default function Label({ children, ...props }: LabelProps) {
	return (
		<label className="text-theme-white" {...props}>
			{children}
		</label>
	)
}

type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'className'>
