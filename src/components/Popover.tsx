import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'

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
	const { popover, setPopover } = useContext(PopoverContext)!
	const popoverRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (popover) {
			const handleClick = (event: MouseEvent) => {
				if (
					popoverRef.current &&
					!popoverRef.current.contains(event.target as Node)
				) {
					setPopover(false)
				}
			}

			document.addEventListener('click', handleClick)

			return () => {
				document.removeEventListener('click', handleClick)
			}
		}
	}, [popover])

	if (popover) {
		return (
			<div className="absolute right-0 top-10 z-10" ref={popoverRef}>
				{children}
			</div>
		)
	}
}
