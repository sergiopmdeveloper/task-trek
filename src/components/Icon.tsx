import { cn } from '@/lib/utils'
import { Check, Edit, Trash2 } from 'lucide-react'

const icons = {
	check: Check,
	edit: Edit,
	trash: Trash2,
}

export default function Icon({ type }: { type: 'check' | 'edit' | 'trash' }) {
	const Icon = icons[type]

	return (
		<div
			className={cn(
				`flex h-7 w-7 cursor-pointer items-center justify-center rounded hover:brightness-75`,
				{
					'bg-green-300': type === 'check',
					'bg-orange-300': type === 'edit',
					'bg-red-300': type === 'trash',
				},
			)}
		>
			<Icon
				className={cn(`h-4 w-4`, {
					'stroke-green-800': type === 'check',
					'stroke-orange-800': type === 'edit',
					'stroke-red-800': type === 'trash',
				})}
			/>
		</div>
	)
}
