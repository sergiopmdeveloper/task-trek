import { cn } from '@/lib/utils'
import React from 'react'

/**
 * Table component.
 * @param {React.ReactNode} children The children of the component.
 * @returns The component.
 */
export default function Table({ children }: { children: React.ReactNode }) {
	return (
		<div className="mt-12 w-full overflow-x-auto px-4">
			<table className="mx-auto w-full max-w-screen-xl text-left text-sm">
				{children}
			</table>
		</div>
	)
}

/**
 * Table header component.
 * @param {React.ReactNode} children The children of the component.
 * @returns The component.
 */
Table.Header = function TableHeader({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<thead className="bg-gray-700 uppercase text-gray-400">
			<tr>{children}</tr>
		</thead>
	)
}

/**
 * Table header row component.
 * @param {React.ReactNode} children The children of the component.
 * @returns The component.
 */
Table.HeaderRow = function TableHeaderRow({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<th scope="col" className="max-w-24 truncate px-6 py-3">
			{children}
		</th>
	)
}

/**
 * Table body component.
 * @param {React.ReactNode} children The children of the component.
 * @returns The component.
 */
Table.Body = function TableBody({ children }: { children: React.ReactNode }) {
	return <tbody>{children}</tbody>
}

/**
 * Table row component.
 * @param {React.ReactNode} props.children The children of the component.
 * @returns The component.
 */
Table.Row = function TableRow({ children }: { children: React.ReactNode }) {
	return (
		<tr className="border-b border-gray-400 bg-gray-800 text-gray-400">
			{children}
		</tr>
	)
}

type TableCellProps = {
	classname?: string
	children: React.ReactNode
}

/**
 * Table cell component.
 * @param {TableCellProps} props The props of the component.
 * @param {string} props.classname The classname of the component.
 * @param {React.ReactNode} props.children The children of the component.
 * @returns The component.
 */
Table.Cell = function TableCell({ classname, children }: TableCellProps) {
	return (
		<td
			className={cn(`px-6 py-4`, classname, {
				'max-w-24 truncate': !classname,
			})}
		>
			{children}
		</td>
	)
}
