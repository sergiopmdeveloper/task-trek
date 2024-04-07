import React, { createContext, useContext, useState } from 'react'

interface PopoverContextValue {
	popover: boolean
	setPopover: React.Dispatch<React.SetStateAction<boolean>>
}

const PopoverContext = createContext<PopoverContextValue | null>(null)

/**
 * Popover component.
 * @param {React.ReactNode} children The children of the component.
 * @returns The component.
 */
export default function Popover({ children }: { children: React.ReactNode }) {
	const [popover, setPopover] = useState(false)

	return (
		<PopoverContext.Provider value={{ popover, setPopover }}>
			<div className="relative">{children}</div>
		</PopoverContext.Provider>
	)
}

/**
 * Popover trigger component.
 * @param {React.ReactNode} props.children The children of the component.
 * @returns The component.
 */
Popover.trigger = function PopoverTrigger({
	children,
}: {
	children: React.ReactNode
}) {
	const { popover, setPopover } = useContext(PopoverContext)!

	return (
		<div
			onClick={() => {
				setPopover(!popover)
			}}
		>
			{children}
		</div>
	)
}

/**
 * Popover content component.
 * @param {React.ReactNode} props.children The children of the component.
 * @returns The component.
 */
Popover.Content = function PopoverContent({
	children,
}: {
	children: React.ReactNode
}) {
	const { popover } = useContext(PopoverContext)!

	if (popover) {
		return <div className="absolute right-0 top-10">{children}</div>
	}
}
