import React, { createContext, useContext, useEffect, useState } from 'react'

interface PopoverProps<T> {
	formState: T
	initialState: T
	children: React.ReactNode
}

interface PopoverContextValue {
	popover: boolean
	setPopover: React.Dispatch<React.SetStateAction<boolean>>
}

const PopoverContext = createContext<PopoverContextValue | null>(null)

/**
 * Popover component.
 * @param {PopoverProps} props The props of the component.
 * @param {T} props.formState The form state.
 * @param {T} props.initialState The initial state.
 * @param {React.ReactNode} props.children The children of the component.
 * @returns The component.
 */
export default function Popover<T>({
	formState,
	initialState,
	children,
}: PopoverProps<T>) {
	const [popover, setPopover] = useState(false)
	const [pageLoad, setPageLoad] = useState(true)

	useEffect(() => {
		if (pageLoad) {
			setPageLoad(false)
			return
		}

		if (JSON.stringify(formState) === JSON.stringify(initialState)) {
			setPopover(false)
		}
	}, [formState])

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
