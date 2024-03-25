import addTask from '@/actions/add-task'
import Error from '@/components/Error'
import Input from '@/components/Input'
import Submit from '@/components/Submit'
import Textarea from '@/components/Textarea'
import { AddTaskState } from '@/types/tasks'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import { useFormState } from 'react-dom'

const addTaskState: AddTaskState = {
	name: [],
	priority: [],
	deadline: [],
	description: [],
}

/**
 * Tasks bar component.
 * @returns The component.
 */
export default function TasksBar() {
	const [addTaskForm, setAddTaskForm] = useState(false)
	const [formState, formAction] = useFormState(addTask, addTaskState)

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
						<form
							className="absolute right-0 top-20 flex w-80 flex-col rounded bg-theme-white p-4"
							action={formAction}
						>
							<h1 className="mb-4 text-xl font-semibold">Add task</h1>
							<div className="mb-4 flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<Input
										errors={formState.name}
										name="name"
										id="name"
										type="text"
										placeholder="Name..."
										autoComplete="off"
									/>
									{formState.name.length > 0 && (
										<Error>{formState.name[0]}</Error>
									)}
								</div>
								<div className="flex flex-col gap-1">
									<Input
										errors={formState.priority}
										name="priority"
										id="priority"
										type="text"
										placeholder="Priority..."
										autoComplete="off"
									/>
									{formState.priority.length > 0 && (
										<Error>{formState.priority[0]}</Error>
									)}
								</div>
								<div className="flex flex-col gap-1">
									<Input
										errors={formState.deadline}
										name="deadline"
										id="deadline"
										type="date"
										autoComplete="off"
									/>
									{formState.deadline.length > 0 && (
										<Error>{formState.deadline[0]}</Error>
									)}
								</div>
								<div className="flex flex-col gap-1">
									<Textarea
										errors={formState.description}
										name="description"
										id="description"
										rows={4}
										placeholder="Description"
										autoComplete="off"
									/>
									{formState.description.length > 0 && (
										<Error>{formState.description[0]}</Error>
									)}
								</div>
							</div>
							<Submit>Send</Submit>
						</form>
					)}
				</div>
			</div>
		</>
	)
}
