import React from 'react'

/**
 * Error component.
 * @param {ErrorProps} props - The props of the component.
 * @param {React.ReactNode} props.children - The children of the component.
 * @returns The component.
 */
export default function Error({ children }: ErrorProps) {
	return <span className="text-sm text-red-400 xs:text-base">{children}</span>
}

type ErrorProps = {
	children: React.ReactNode
}
