import React from 'react'

/**
 * Header component.
 * @param {HeaderProps} props - The props of the component.
 * @param {React.ReactNode} props.children - The children of the component.
 * @returns The component.
 */
export default function Header({ children }: HeaderProps) {
	return (
		<header className="my-4 h-16 w-full">
			<div className="mx-auto flex h-full max-w-screen-xl items-center justify-between rounded-xl bg-theme-black px-4 shadow-lg">
				{children}
			</div>
		</header>
	)
}

type HeaderProps = {
	children: React.ReactNode
}
