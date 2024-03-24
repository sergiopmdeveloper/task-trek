import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import Input from '../Input'
import Submit from '../Submit'
import Textarea from '../Textarea'

/**
 * Tasks bar component.
 * @returns The component.
 */
export default function TasksBar() {
	const [addTaskForm, setAddTaskForm] = useState(false)

	const showCloseForm = () => setAddTaskForm(!addTaskForm)

	return (
		<>
			<div className="mt-4 h-16 w-full px-4">
				<div className="relative mx-auto flex h-full w-full max-w-screen-xl items-center justify-between rounded-xl bg-theme-yellow px-4">
					<h1 className="text-lg font-semibold text-theme-white">Tasks</h1>
					<div
						className="flex h-7 w-7 cursor-pointer items-center justify-center rounded bg-theme-gray hover:brightness-75"
						onClick={showCloseForm}
					>
						{!addTaskForm ? (
							<Plus className="h-6 w-6 stroke-theme-black" />
						) : (
							<X className="h-6 w-6 stroke-theme-black" />
						)}
					</div>
					{addTaskForm && (
						<form className="absolute right-0 top-20 flex w-80 flex-col rounded bg-theme-white p-4">
							<h1 className="mb-4 text-xl font-semibold">Add task</h1>
							<div className="mb-4 flex flex-col gap-4">
								<Input
									name="name"
									id="name"
									type="text"
									placeholder="Name..."
									autoComplete="off"
								/>
								<Input
									name="priority"
									id="priority"
									type="text"
									placeholder="Priority..."
									autoComplete="off"
								/>
								<Input
									name="deadline"
									id="deadline"
									type="date"
									autoComplete="off"
								/>
								<Textarea
									name="description"
									id="description"
									rows={4}
									placeholder="Description"
									autoComplete="off"
								/>
							</div>
							<Submit>Send</Submit>
						</form>
					)}
				</div>
			</div>
		</>
	)
}
