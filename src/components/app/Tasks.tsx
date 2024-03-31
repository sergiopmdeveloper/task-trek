import useTasks from '@/hooks/useTasks'
import Cookies from 'js-cookie'
import { Check, Edit, Trash2 } from 'lucide-react'

/**
 * Tasks component.
 * @returns The component.
 */
export default function Tasks() {
	const tasks = useTasks(Cookies.get('userId'), Cookies.get('token'))

	return (
		<div className="mt-12 w-full overflow-x-auto px-4">
			<table className="mx-auto w-full max-w-screen-xl text-left text-sm">
				<thead className="bg-gray-700 uppercase text-gray-400">
					<tr>
						<th scope="col" className="max-w-24 truncate px-6 py-3">
							Task name
						</th>
						<th scope="col" className="max-w-24 truncate px-6 py-3">
							Description
						</th>
						<th scope="col" className="max-w-24 truncate px-6 py-3">
							Priority
						</th>
						<th scope="col" className="max-w-24 truncate px-6 py-3">
							Deadline
						</th>
						<th scope="col" className="max-w-24 truncate px-6 py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task) => (
						<tr
							key={task.id}
							className="border-b border-gray-400 bg-gray-800 text-gray-400"
						>
							<th
								scope="row"
								className="max-w-24 truncate px-6 py-4 font-semibold"
							>
								{task.name}
							</th>
							<td className="max-w-24 truncate px-6 py-4">{task.priority}</td>
							<td className="max-w-24 truncate px-6 py-4">
								{task.description}
							</td>
							<td className="max-w-24 truncate px-6 py-4">
								{new Date(task.deadline).toLocaleDateString()}
							</td>
							<td className="flex gap-2 px-6 py-4">
								<div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-green-300 hover:brightness-75">
									<Check className="h-4 w-4 stroke-green-800" />
								</div>
								<div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-orange-300 hover:brightness-75">
									<Edit className="h-4 w-4 stroke-orange-800" />
								</div>
								<div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-red-300 hover:brightness-75">
									<Trash2 className="h-4 w-4 stroke-red-800" />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
