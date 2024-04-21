import React, { createContext, useContext, useState } from 'react'

interface ModalContextValue {
	modal: boolean
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextValue | null>(null)

/**
 * Modal component.
 * @param {React.ReactNode} children The children of the component.
 * @returns The component.
 */
export default function Modal({ children }: { children: React.ReactNode }) {
	const [modal, setModal] = useState(false)

	return (
		<ModalContext.Provider value={{ modal, setModal }}>
			<div>{children}</div>
		</ModalContext.Provider>
	)
}

/**
 * Modal trigger component.
 * @param {React.ReactNode} props.children The children of the component.
 * @returns The component.
 */
Modal.trigger = function ModalTrigger({
	children,
}: {
	children: React.ReactNode
}) {
	const { setModal } = useContext(ModalContext)!

	return (
		<div
			onClick={() => {
				setModal(true)
			}}
		>
			{children}
		</div>
	)
}

/**
 * Modal content component.
 * @param {React.ReactNode} props.children The children of the component.
 * @returns The component.
 */
Modal.Content = function ModalContent({
	children,
}: {
	children: React.ReactNode
}) {
	const { modal, setModal } = useContext(ModalContext)!
	const childRef = React.createRef<HTMLDivElement>()

	if (modal) {
		return (
			<div
				className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-theme-black bg-opacity-20"
				onClick={(event) => {
					if (childRef.current?.contains(event.target as Node)) return
					setModal(false)
				}}
			>
				<div ref={childRef}>{children}</div>
			</div>
		)
	}
}
