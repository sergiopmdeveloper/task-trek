import React from 'react'

/**
 * Label component.
 * @param {LabelProps} props The props of the component.
 * @param {React.ReactNode} props.children The children of the component.
 * @param {React.LabelHTMLAttributes<HTMLLabelElement>} props.props The props of the label.
 * @returns The component.
 */
export default function Label({ children, ...props }: LabelProps) {
	return (
		<label className="text-sm text-theme-white xs:text-base" {...props}>
			{children}
		</label>
	)
}

type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'className'>
